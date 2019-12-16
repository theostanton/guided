import {QueueHandler} from "./QueueHandler";
import daos from '../database/daos'
import * as Google from '../api/google'
import Bull = require("bull");
import executeSequentially from "../utils/executeSequentially";
import {calculateRide} from "./index";
import {LocationRow, RideRow, StayRow} from "../database/types";
import {generateId} from "../database/utils";
import {Logger} from "@guided/common/srv/Logger";
import {stay} from "../graphql/resolvers/Query/stays";
import {LatLng, Leg, Stay, Step} from "@guided/common";
import {DirectionsStep, RouteLeg} from "@google/maps";
import {generateLocationRow} from "../database/models/location";

export type Context = {
    startStayId: string
    endStayId: string
    positionOffset: number
}

const logger = new Logger('CalculateRideHandler');

export class CalculateRideHandler extends QueueHandler<Context> {

    static instance: CalculateRideHandler | undefined;

    static async updateAll(guideId: string): Promise<void> {

        logger.debug(`updateAll guideId=${guideId}`);

        await daos.ride.deleteWhere({'guide': guideId});
        await daos.stay.deleteWhere({'locked': false, 'guide': guideId});

        const stays = (await daos.stay.findMany({'guide': guideId}));
        stays.sort((a, b) => {
            return (a.position || 0) + (b.position || 0)
        });

        const handler = await CalculateRideHandler.get();
        await handler.empty();

        const contexts: Context[] = [];
        for (let i = 0; i < stays.length - 1; i++) {
            contexts.push({
                startStayId: stays[i].id,
                endStayId: stays[i + 1].id,
                positionOffset: stays[i].position
            });
        }
        await executeSequentially(contexts, async (context: Context) => {
            await calculateRide(context)
        });

        await handler.resume();
    }

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

        const startStay = await daos.stay.findOne({id: context.startStayId});
        const startLocation = await daos.location.findOne({id: startStay.location});


        const lastStay = await daos.stay.findOne({id: context.endStayId});
        const lastLocation = await daos.location.findOne({id: lastStay.location});

        const {id: guideId, rideLimitMinutes} = await daos.guide.get(startStay.guide);

        const directions = await Google.directions(startLocation.lat, startLocation.long, lastLocation.lat, lastLocation.long);

        const route = directions.routes[0];


        const rideRows: RideRow[] = [];
        const locationRows: LocationRow[] = [];
        const stayRows: StayRow[] = [];
        let path: LatLng[] = [];
        let position = context.positionOffset;

        async function createStay(fromStayId: string, step: DirectionsStep): Promise<string> {
            const stayId = generateId('stay');

            const locationRow = await generateLocationRow(step.start_location!.lat!, step.start_location!.lng!);
            locationRows.push(locationRow);

            const toStay: StayRow = {
                id: stayId,
                location: locationRow.id,
                guide: guideId,
                nights: 1,
                position: ++position,
                locked: false
            };
            stayRows.push(toStay);
            rideRows.push({
                id: generateId('ride'),
                start: fromStayId,
                end: stayId,
                guide: startStay.guide,
                durationMinutes: rideMinutes,
                route: 'null',
                path: JSON.stringify(path, null, 4)
            });
            rideMinutes = 0;
            path = [];
            path.push({
                long: step.start_location.lng,
                lat: step.start_location.lat
            });

            return toStay.id
        }

        let rideMinutes = 0;
        path.push({
            lat: startLocation.lat,
            long: startLocation.long
        });
        let fromStayId = startStay.id;
        const promises = route.legs.map((leg: RouteLeg, legIndex: number) => {
            return leg.steps.map(async (step: DirectionsStep, stepIndex: number) => {
                const durationMinutes = step.duration.value / 60;
                const isLast = legIndex === route.legs.length - 1 && stepIndex === leg.steps.length - 1;
                if (rideMinutes + durationMinutes > rideLimitMinutes) {
                    fromStayId = await createStay(fromStayId, step);
                }
                path.push({
                    long: step.end_location.lng,
                    lat: step.end_location.lat
                });
                rideMinutes += durationMinutes;
                if (isLast) {
                    fromStayId = await createStay(fromStayId,step);
                }
            });
        }).flat(1);

        await Promise.all(promises);

        await daos.location.insertMany(locationRows);
        await daos.stay.insertMany(stayRows);
        await daos.ride.insertMany(rideRows);

        logger.debug('Handled')
        logger.json(context);
    }

    async empty(): Promise<void> {
        await this.bull.empty();
        console.log(`count after clear ${await this.bull.count()}`);
    }

    async resume(): Promise<void> {
        await this.bull.resume()
    }
}