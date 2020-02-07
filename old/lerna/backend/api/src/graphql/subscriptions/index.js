"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const { PubSub } = require('apollo-server');
const publishGuide_1 = __importDefault(require("./publishGuide"));
exports.publishGuide = publishGuide_1.default;
const pubsub = new PubSub();
exports.pubsub = pubsub;
const Subscription = {
    guide: {
        resolve: (args) => {
            console.log('resolve args=', args);
            return {
                id: args.guide.id
            };
        },
        subscribe: () => pubsub.asyncIterator('guides')
    }
};
exports.Subscription = Subscription;
//# sourceMappingURL=index.js.map