import Bull from "bull";
import { Queue } from "./index";
export declare abstract class QueueHandler<T> {
    bull: Bull.Queue<T>;
    queue: Queue;
    protected constructor(queue: Queue);
    subscribe(): Promise<void>;
    add(t: T): Promise<void>;
    abstract handle(t: T, done: Bull.DoneCallback): Promise<void>;
}
//# sourceMappingURL=QueueHandler.d.ts.map