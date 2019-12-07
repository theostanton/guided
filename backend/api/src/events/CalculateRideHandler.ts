import {QueueHandler} from "./QueueHandler";
import daos from '../database/daos'
import * as Google from '../api/google'
import Bull = require("bull");
import executeSequentially from "../utils/executeSequentially";
import {calculateRide} from "./index";
import {RideRow} from "../database/types";
import {generateId} from "../database/utils";

type Context = {
    startStayId: number
    endStayId: number
}

export class CalculateRideHandler extends QueueHandler<Context> {

    static instance: CalculateRideHandler | undefined;

    static async updateAll(): Promise<void> {

        console.log('updateAll');

        const ids = (await daos.stay.ids()).map(({id}) => {
            return id
        });

        console.log('got ids', ids.length);

        const handler = await CalculateRideHandler.get();
        await handler.empty();

        const indices = [];
        for (let i = 0; i < ids.length - 1; i++) {
            indices.push([ids[i], ids[i + 1]]);
        }
        console.log(JSON.stringify(indices, null, 4));
        await executeSequentially(indices, async ([i, j]) => {
            console.log(`index ${i},${j}`);
            await calculateRide(i, j)
        });

        await handler.resume();
    }

    static async get(): Promise<CalculateRideHandler> {
        console.log('get');

        if (!CalculateRideHandler.instance) {
            console.log('init');
            CalculateRideHandler.instance = new CalculateRideHandler();
            await CalculateRideHandler.instance.subscribe();
            console.log('subscribed')
        }
        return CalculateRideHandler.instance;
    }

    private constructor() {
        super('calculate-ride');
    }

    async handle(context: Context, done: Bull.DoneCallback): Promise<void> {

        await daos.ride.deleteWhere({start: context.startStayId, end: context.endStayId});

        const startStay = await daos.stay.findOne({id: context.startStayId});
        const startLocation = await daos.location.findOne({id: startStay.location});


        const endStay = await daos.stay.findOne({id: context.endStayId});
        const endLocation = await daos.location.findOne({id: endStay.location});

        const directions = await Google.directions(startLocation.lat, startLocation.long, endLocation.lat, endLocation.long);

        const route = directions.routes[0];

        const rideRow: RideRow = {
            id: generateId('ride'),
            start: startStay.id,
            end: endStay.id,
            // @ts-ignore
            route: JSON.stringify(route, null, 4)
        };

        await daos.ride.insert(rideRow);
        console.log('handled', context);
    }

    async empty(): Promise<void> {
        await this.bull.empty()
        console.log(`count after clear ${await this.bull.count()}`);
    }

    async resume(): Promise<void> {
        await this.bull.resume()
    }
}