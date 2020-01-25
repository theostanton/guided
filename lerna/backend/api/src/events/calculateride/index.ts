import {LocationRow, RideRow, StayRow} from "../../database/types";
import {DirectionsStep} from "@google/maps";
import {generateId} from "../../database/utils";
import {LatLng, Logger} from "@guided/common";
import DB, {daos} from "../../database";
import {QueueHandler} from "../QueueHandler";
import executeSequentially from "../../utils/executeSequentially";
import {calculateRide} from "../index";
import * as Google from '../../api/google'
import {generateLocationRow} from "../../database/models/location";
import Bull from "bull";
import {directions} from "../../api/google";
import * as fs from "fs";

export type Context = {
    startStayId: string
    endStayId: string
    positionOffset: number
}

type Packet = {
    guideId: string;
    rideRows: RideRow[];
    locationRows: LocationRow[];
    stayRows: StayRow[];
    current?: {
        position: number;
        path: LatLng[];
        startStayId: string;
        durationMinutes: number;
    }
}

const logger = new Logger('Index');

export async function updateAll(guideId: string): Promise<void> {

    logger.debug(`updateAll guideId=${guideId}`);

    await daos.ride.deleteWhere({'guide': guideId});
    await daos.stay.deleteWhere({'locked': false, 'guide': guideId});


    type StayInfo = {
        id: string
        position: number
        lat: number
        long: number
    }

    const query = `
select s.id as id,
       s.position as position,
       l.lat as lat,
       l.long as long
from stays as s
left join locations as l on s.location = l.id
where guide='${guideId}';
`;

    let stayInfos = await DB().manyOrNone<StayInfo>(query);

    console.log('stayInfos', stayInfos.length);

    const waypoints = stayInfos
        .filter((stay: StayInfo, index: number) => {
            return !(index === 0 || index === stayInfos.length - 1);
        });

    const directionsResult = await directions(
        stayInfos[0].lat,
        stayInfos[0].long,
        stayInfos[stayInfos.length - 1].lat,
        stayInfos[stayInfos.length - 1].long,
        waypoints
    );

    stayInfos = stayInfos.sort((a, b) => {
        return a.position - b.position
    });


    fs.writeFileSync('./directions.json', JSON.stringify(directionsResult, null, 4), {
        encoding: 'utf-8'
    });

    const handler = await CalculateRideHandler.get();
    await handler.empty();

    const contexts: Context[] = [];
    for (let i = 0; i < stayInfos.length - 1; i++) {
        contexts.push({
            startStayId: stayInfos[i].id,
            endStayId: stayInfos[i + 1].id,
            positionOffset: stayInfos[i].position
        });
    }
    await executeSequentially(contexts, async (context: Context) => {
        await calculateRide(context)
    });
}


async function createStay(step: DirectionsStep, isLastRide: boolean, packet: Packet, context: Context): Promise<void> {

    const locationRow = await generateLocationRow(step.start_location!.lat!, step.start_location!.lng!);
    packet.locationRows.push(locationRow);

    let toStayId: string;
    if (isLastRide) {
        toStayId = context.endStayId
    } else {
        toStayId = generateId('stay');
        const toStay: StayRow = {
            id: toStayId,
            location: locationRow.id,
            guide: packet.guideId,
            nights: 1,
            position: packet.current!.position,
            locked: false
        };
        packet.stayRows.push(toStay);
    }
    packet.rideRows.push({
        id: generateId('ride'),
        start: packet.current!.startStayId,
        end: toStayId,
        guide: packet.guideId,
        durationMinutes: packet.current!.durationMinutes,
        route: 'null',
        path: JSON.stringify(packet.current!.path, null, 4)
    });


    packet.current = {
        position: packet.current!.position + 1,
        path: [{
            long: step.start_location.lng,
            lat: step.start_location.lat
        }],
        durationMinutes: 0,
        startStayId: toStayId
    }
}

async function createPacket(context: Context): Promise<Packet> {

    const startStay = await daos.stay.findOne({id: context.startStayId});
    const startLocation = await daos.location.findOne({id: startStay.location});

    const lastStay = await daos.stay.findOne({id: context.endStayId});
    const lastLocation = await daos.location.findOne({id: lastStay.location});

    const {id: guideId, rideLimitMinutes} = await daos.guide.get(startStay.guide);

    const directions = await Google.directions(startLocation.lat, startLocation.long, lastLocation.lat, lastLocation.long, []);


    if (directions.routes.length === 0) {
        const path: LatLng[] = [{
            lat: startLocation.lat,
            long: startLocation.long
        }, {
            lat: lastLocation.lat,
            long: lastLocation.long
        }];
        return {
            guideId,
            locationRows: [],
            rideRows: [{
                id: generateId('ride'),
                durationMinutes: 0,
                start: context.startStayId,
                end: context.endStayId,
                guide: guideId,
                path: JSON.stringify(path),
                route: 'null'
            }],
            stayRows: []
        }
    }

    const route = directions.routes[0];

    const packet: Packet = {
        guideId,
        locationRows: [],
        rideRows: [],
        stayRows: [],
        current: {
            position: startStay.position,
            durationMinutes: 0,
            path: [],
            startStayId: startStay.id
        }
    };

    packet.current!.path.push({
        lat: startLocation.lat,
        long: startLocation.long
    });

    const steps = route.legs.map(leg => {
        return leg.steps;
    }).flat(1);

    await executeSequentially(steps, async (step: DirectionsStep, index: number) => {
        const durationMinutes = step.duration.value / 60;
        const isLast = index === steps.length - 1;
        if (packet.current!.durationMinutes + durationMinutes > rideLimitMinutes || isLast) {
            await createStay(step, isLast, packet, context);
        }
        packet.current!.path.push({
            long: step.end_location.lng,
            lat: step.end_location.lat
        });
        packet.current!.durationMinutes += durationMinutes;
    });

    return packet;
}

export class CalculateRideHandler extends QueueHandler<Context> {

    static instance: CalculateRideHandler | undefined;

    static async get(): Promise<CalculateRideHandler> {
        if (!CalculateRideHandler.instance) {
            CalculateRideHandler.instance = new CalculateRideHandler();
        }
        return CalculateRideHandler.instance;
    }

    private constructor() {
        super('calculate-ride');
    }

    async handle(context: Context, done: Bull.DoneCallback): Promise<void> {

        const packet = await createPacket(context);

        await daos.location.insertMany(packet.locationRows);
        await daos.stay.insertMany(packet.stayRows);
        await daos.ride.insertMany(packet.rideRows);

    }

    async empty(): Promise<void> {
        await this.bull.empty();
        console.log(`count after clear ${await this.bull.count()}`);
    }
}