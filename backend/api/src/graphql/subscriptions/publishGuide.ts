import {pubsub} from "./index";
import {Guide} from "@guided/common";

export default async function (guide: Partial<Guide>) {
    console.log('publishGuide', guide.user);
    await pubsub.publish('guides', {
        guide
    })
}