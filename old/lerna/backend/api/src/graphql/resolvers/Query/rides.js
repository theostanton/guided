"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const memoize_1 = __importDefault(require("../../../utils/memoize"));
const RideDao_1 = __importDefault(require("../../../database/daos/RideDao"));
const daos_1 = __importDefault(require("../../../database/daos"));
const dao = memoize_1.default(() => {
    return new RideDao_1.default();
});
async function ride(_, { id }) {
    return dao().get(id);
}
exports.ride = ride;
async function allRides(_, { guideSlug }) {
    const { id: guide } = await daos_1.default.guide.findOne({ slug: guideSlug });
    return dao().findMany({ guide });
}
exports.allRides = allRides;
