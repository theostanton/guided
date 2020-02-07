import { QueueHandler } from "../QueueHandler";
import Bull from "bull";
export declare type Context = {
    startStayId: string;
    endStayId: string;
    positionOffset: number;
};
export declare function updateAll(guideId: string): Promise<void>;
export declare class CalculateRideHandler extends QueueHandler<Context> {
    static instance: CalculateRideHandler | undefined;
    static get(): Promise<CalculateRideHandler>;
    private constructor();
    handle(context: Context, done: Bull.DoneCallback): Promise<void>;
    empty(): Promise<void>;
}
//# sourceMappingURL=index.d.ts.map