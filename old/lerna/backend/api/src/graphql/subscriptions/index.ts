import {Guide} from "@guided/common";

const {PubSub} = require('apollo-server');
import publishGuide from "./publishGuide";

const pubsub = new PubSub();

type Triggers = 'guides'


const Subscription = {
    guide: {
        resolve: (args: { guide: Guide }): Partial<Guide> => {
            console.log('resolve args=', args);
            return {
                id: args.guide.id
            }
        },
        subscribe: () => pubsub.asyncIterator('guides')
    }
};

export {
    Subscription,
    pubsub,
    publishGuide
}