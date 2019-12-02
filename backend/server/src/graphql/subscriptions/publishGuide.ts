import {Guide} from "../../types";
import {pubsub} from "./index";

export default async function (guide: Partial<Guide>) {
    console.log('publishGuide', guide);
    await pubsub.publish('guides', {
        guide
    })
}