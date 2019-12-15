import {CalculateRideHandler} from "./CalculateRideHandler";

export type Queue = 'calculate-ride'


export async function calculateRide(startStayId: string, endStayId: string): Promise<void> {
    const handler = await CalculateRideHandler.get();
    await handler.add({startStayId, endStayId});
}

export async function subscribe():Promise<void> {
    const handler = await CalculateRideHandler.get()
}