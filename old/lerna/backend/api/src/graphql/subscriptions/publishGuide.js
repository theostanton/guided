"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
async function default_1(guide) {
    await index_1.pubsub.publish('guides', {
        guide
    });
}
exports.default = default_1;
