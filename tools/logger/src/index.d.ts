export interface Logger {
    log(message: string, label?: string): void;
    json(object: any, label?: string): void;
    info(message: string): void;
    error(message: string): void;
}
declare let logger: Logger;
export declare const log: (message: string, label?: string | undefined) => void, logError: (message: string) => void, logInfo: (message: string) => void, logJson: (object: any, label?: string | undefined) => void;
export default logger;
//# sourceMappingURL=index.d.ts.map