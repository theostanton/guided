import { Logger } from ".";
export declare class LocalLogger implements Logger {
    error(error: any): void;
    throw(message: string): void;
    info(message: string): void;
    json(object: any, label?: string): void;
    log(message: string, label?: string): void;
}
//# sourceMappingURL=LocalLogger.d.ts.map