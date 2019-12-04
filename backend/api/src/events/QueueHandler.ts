import Bull from "bull";
import {Queue} from "./index";

export abstract class QueueHandler<T> {

    bull: Bull.Queue<T>;
    queue: Queue;

    protected constructor(queue: Queue) {
        this.queue = queue;
        this.bull = new Bull<T>(queue)
    }

    async subscribe(): Promise<void> {
        return this.bull.process(20, async (job, done) => {
            await this.handle(job.data, done);
            done()
        }).then(value => {
            console.log('onProcess')
        }).catch(err => {
            console.error(err)
        })
    }

    async add(t: T) {
        await this.bull.add(t);
        console.log(`count=${await this.bull.count()}`);
    }

    abstract handle(t: T, done: Bull.DoneCallback): Promise<void>
}