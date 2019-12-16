import {pubsub} from "./index";
import {Guide} from "@guided/common";

export default async function (guide: Partial<Guide>) {
    await pubsub.publish('guides', {
        guide
    })
}