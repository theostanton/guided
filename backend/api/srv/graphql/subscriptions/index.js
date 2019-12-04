"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var PubSub = require('apollo-server').PubSub;
var publishGuide_1 = __importDefault(require("./publishGuide"));
exports.publishGuide = publishGuide_1.default;
var pubsub = new PubSub();
exports.pubsub = pubsub;
var Subscription = {
    guide: {
        resolve: function (args) {
            console.log('resolve args=', args);
            return {
                id: args.guide.id
            };
        },
        subscribe: function () { return pubsub.asyncIterator('guides'); }
    }
};
exports.Subscription = Subscription;
