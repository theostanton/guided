import {QueueHandler} from "./QueueHandler";
import daos from '../database/daos'
import * as Google from '../api/google'
import memoize from "../utils/memoize";
import {RideRow} from "../types";

type Context = {
    startStayId: number
    endStayId: number
}

export class CalculateRideHandler extends QueueHandler<Context> {

    static instance: CalculateRideHandler | undefined;

    static async get(): Promise<CalculateRideHandler> {
        console.log('get')

        if (!CalculateRideHandler.instance) {
            console.log('init')
            CalculateRideHandler.instance = new CalculateRideHandler();
            console.log('subscribed')
        }
        return CalculateRideHandler.instance;
    }

    private constructor() {
        super('calculate ride');
    }

    async handle(context: Context): Promise<void> {

        console.log('handle', context);

        await daos.ride.deleteWhere({start: context.startStayId, end: context.endStayId})

        const startStay = await daos.stay.findOne({id: context.startStayId});
        const startSpot = await daos.spot.findOne({id: startStay.spot});
        const startLocation = await daos.location.findOne({id: startSpot.id});


        const endStay = await daos.stay.findOne({id: context.endStayId})
        const endSpot = await daos.spot.findOne({id: endStay.spot});
        const endLocation = await daos.location.findOne({id: endSpot.id});

        const directions = await Google.directions(startLocation.lat, startLocation.long, endLocation.lat, endLocation.long)

        const route = directions.routes[0]

        const rideRow: Partial<RideRow> = {
            start: startSpot.id,
            end: endSpot.id,
            route: JSON.stringify(route, null, 4)
        };

        await daos.ride.insert(rideRow)


    }
}