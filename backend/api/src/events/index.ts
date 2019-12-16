import {CalculateRideHandler, Context} from "./CalculateRideHandler";

export type Queue = 'calculate-ride'


export async function calculateRide(context:Context): Promise<void> {
    const handler = await CalculateRideHandler.get();
    await handler.add(context);
}

export async function subscribe():Promise<void> {
    const handler = await CalculateRideHandler.get();
    await handler.subscribe()
}