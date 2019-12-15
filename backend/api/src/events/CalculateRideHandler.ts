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
import {LatLng, Leg, Step} from "@guided/common";
import {DirectionsStep, RouteLeg} from "@google/maps";

type Context = {
    startStayId: string
    endStayId: string
}

const logger = new Logger('CalculateRideHandler');

export class CalculateRideHandler extends QueueHandler<Context> {

    static instance: CalculateRideHandler | undefined;

    static async updateAll(guideId: string): Promise<void> {

        logger.debug(`updateAll guideId=${guideId}`);

        await daos.ride.deleteWhere({'guide': guideId});
        await daos.stay.deleteWhere({'locked': false, 'guide': guideId});

        const stayIds = (await daos.stay.findMany({'guide': guideId})).map(({id}) => {
            return id
        });

        const handler = await CalculateRideHandler.get();
        await handler.empty();

        const indices = [];
        for (let i = 0; i < stayIds.length - 1; i++) {
            indices.push([stayIds[i], stayIds[i + 1]]);
        }
        await executeSequentially(indices, async ([i, j]) => {
            await calculateRide(i, j)
        });

        await handler.resume();
    }

    static async get(): Promise<CalculateRideHandler> {
        if (!CalculateRideHandler.instance) {
            CalculateRideHandler.instance = new CalculateRideHandler();
            await CalculateRideHandler.instance.subscribe();
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

        function createStay(step: DirectionsStep) {
            const stayId = generateId('stay');
            const locationId = generateId('location');
            locationRows.push({
                id: locationId,
                lat: step.start_location!.lat!,
                long: step.start_location!.lng!,
                address: undefined,
                label: stayId
            });
            stayRows.push({
                id: stayId,
                location: locationId,
                guide: guideId,
                nights: 1,
                locked: false
            });
            rideRows.push({
                id: generateId('ride'),
                start: startStay.id,
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
        }

        let rideMinutes = 0;
        path.push({
            lat: startLocation.lat,
            long: startLocation.long
        });
        route.legs.forEach((leg: RouteLeg, legIndex: number) => {
            leg.steps.forEach((step: DirectionsStep, stepIndex: number) => {
                const durationMinutes = step.duration.value / 60;
                const isLast = legIndex === route.legs.length - 1 && stepIndex === leg.steps.length - 1;
                if (rideMinutes + durationMinutes > rideLimitMinutes) {
                    createStay(step)
                }
                path.push({
                    long: step.end_location.lng,
                    lat: step.end_location.lat
                });
                rideMinutes += durationMinutes;
                if (isLast) {
                    createStay(step)
                }
            })
        });

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