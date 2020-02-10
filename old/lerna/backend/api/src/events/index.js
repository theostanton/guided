"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculateride_1 = require("./calculateride");
async function calculateRide(context) {
    const handler = await calculateride_1.CalculateRideHandler.get();
    await handler.add(context);
}
exports.calculateRide = calculateRide;
async function subscribe() {
    const handler = await calculateride_1.CalculateRideHandler.get();
    await handler.subscribe();
}
exports.subscribe = subscribe;
