"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../database/utils");
const common_1 = require("@guided/common");
const database_1 = __importStar(require("../../database"));
const QueueHandler_1 = require("../QueueHandler");
const executeSequentially_1 = __importDefault(require("../../utils/executeSequentially"));
const index_1 = require("../index");
const Google = __importStar(require("../../api/google"));
const location_1 = require("../../database/models/location");
const google_1 = require("../../api/google");
const fs = __importStar(require("fs"));
const logger = new common_1.Logger('Index');
async function updateAll(guideId) {
    logger.debug(`updateAll guideId=${guideId}`);
    await database_1.daos.ride.deleteWhere({ 'guide': guideId });
    await database_1.daos.stay.deleteWhere({ 'locked': false, 'guide': guideId });
    const query = `
select s.id as id,
       s.position as position,
       l.lat as lat,
       l.long as long
from stays as s
left join locations as l on s.location = l.id
where guide='${guideId}';
`;
    let stayInfos = await database_1.default().manyOrNone(query);
    console.log('stayInfos', stayInfos.length);
    const waypoints = stayInfos
        .filter((stay, index) => {
        return !(index === 0 || index === stayInfos.length - 1);
    });
    const directionsResult = await google_1.directions(stayInfos[0].lat, stayInfos[0].long, stayInfos[stayInfos.length - 1].lat, stayInfos[stayInfos.length - 1].long, waypoints);
    stayInfos = stayInfos.sort((a, b) => {
        return a.position - b.position;
    });
    fs.writeFileSync('./directions.json', JSON.stringify(directionsResult, null, 4), {
        encoding: 'utf-8'
    });
    const handler = await CalculateRideHandler.get();
    await handler.empty();
    const contexts = [];
    for (let i = 0; i < stayInfos.length - 1; i++) {
        contexts.push({
            startStayId: stayInfos[i].id,
            endStayId: stayInfos[i + 1].id,
            positionOffset: stayInfos[i].position
        });
    }
    await executeSequentially_1.default(contexts, async (context) => {
        await index_1.calculateRide(context);
    });
}
exports.updateAll = updateAll;
async function createStay(step, isLastRide, packet, context) {
    const locationRow = await location_1.generateLocationRow(step.start_location.lat, step.start_location.lng);
    packet.locationRows.push(locationRow);
    let toStayId;
    if (isLastRide) {
        toStayId = context.endStayId;
    }
    else {
        toStayId = utils_1.generateId('stay');
        const toStay = {
            id: toStayId,
            location: locationRow.id,
            guide: packet.guideId,
            nights: 1,
            position: packet.current.position,
            locked: false
        };
        packet.stayRows.push(toStay);
    }
    packet.rideRows.push({
        id: utils_1.generateId('ride'),
        start: packet.current.startStayId,
        end: toStayId,
        guide: packet.guideId,
        durationMinutes: packet.current.durationMinutes,
        route: 'null',
        path: JSON.stringify(packet.current.path, null, 4)
    });
    packet.current = {
        position: packet.current.position + 1,
        path: [{
                long: step.start_location.lng,
                lat: step.start_location.lat
            }],
        durationMinutes: 0,
        startStayId: toStayId
    };
}
async function createPacket(context) {
    const startStay = await database_1.daos.stay.findOne({ id: context.startStayId });
    const startLocation = await database_1.daos.location.findOne({ id: startStay.location });
    const lastStay = await database_1.daos.stay.findOne({ id: context.endStayId });
    const lastLocation = await database_1.daos.location.findOne({ id: lastStay.location });
    const { id: guideId, rideLimitMinutes } = await database_1.daos.guide.get(startStay.guide);
    const directions = await Google.directions(startLocation.lat, startLocation.long, lastLocation.lat, lastLocation.long, []);
    if (directions.routes.length === 0) {
        const path = [{
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
                    id: utils_1.generateId('ride'),
                    durationMinutes: 0,
                    start: context.startStayId,
                    end: context.endStayId,
                    guide: guideId,
                    path: JSON.stringify(path),
                    route: 'null'
                }],
            stayRows: []
        };
    }
    const route = directions.routes[0];
    const packet = {
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
    packet.current.path.push({
        lat: startLocation.lat,
        long: startLocation.long
    });
    const steps = route.legs.map(leg => {
        return leg.steps;
    }).flat(1);
    await executeSequentially_1.default(steps, async (step, index) => {
        const durationMinutes = step.duration.value / 60;
        const isLast = index === steps.length - 1;
        if (packet.current.durationMinutes + durationMinutes > rideLimitMinutes || isLast) {
            await createStay(step, isLast, packet, context);
        }
        packet.current.path.push({
            long: step.end_location.lng,
            lat: step.end_location.lat
        });
        packet.current.durationMinutes += durationMinutes;
    });
    return packet;
}
class CalculateRideHandler extends QueueHandler_1.QueueHandler {
    constructor() {
        super('calculate-ride');
    }
    static async get() {
        if (!CalculateRideHandler.instance) {
            CalculateRideHandler.instance = new CalculateRideHandler();
        }
        return CalculateRideHandler.instance;
    }
    async handle(context, done) {
        const packet = await createPacket(context);
        await database_1.daos.location.insertMany(packet.locationRows);
        await database_1.daos.stay.insertMany(packet.stayRows);
        await database_1.daos.ride.insertMany(packet.rideRows);
    }
    async empty() {
        await this.bull.empty();
        console.log(`count after clear ${await this.bull.count()}`);
    }
}
exports.CalculateRideHandler = CalculateRideHandler;
