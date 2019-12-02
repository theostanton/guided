import Bull from "bull";
import {Queue} from "./index";

export abstract class QueueHandler<T> {

    bull: Bull.Queue<T>;
    queue: Queue;

    protected constructor(queue: Queue) {
        this.queue = queue;
        this.bull = new Bull<T>(queue)
        this.bull.process(async (job, done) => {
            await this.handle(job.data)
        }).then(value => {
            console.log('onProcess')
        }).catch(err => {
            console.error(err)
        })
    }

    async add(t: T) {
        await this.bull.add(t)
    }

    abstract handle(t: T): Promise<void>
}