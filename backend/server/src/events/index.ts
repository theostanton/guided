import {CalculateRideHandler} from "./CalculateRideHandler";

export type Queue = 'calculate ride'


export async function calculateRide(startStayId: number, endStayId: number): Promise<void> {
    console.log('calculateRide', startStayId, 'to', endStayId);
    const handler = await CalculateRideHandler.get();
    await handler.add({startStayId, endStayId})
}