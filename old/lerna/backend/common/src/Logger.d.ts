export declare enum Level {
    INFO = 0,
    WARNING = 1,
    DEBUG = 2,
    ERROR = 3
}
export declare type LoggerFunctions = {
    info: (message: string) => void;
    debug: (message: string) => void;
    warning: (message: string) => void;
    error: (message: string) => void;
    throwError: (message: string) => void;
};
export declare class Logger {
    static build(label: string, level?: Level): LoggerFunctions;
    level: Level;
    label: string;
    constructor(label: string, level?: Level);
    buildMessage(message: string): string;
    info(message: string): void;
    debug(message: string): void;
    warning(message: string): void;
    json(object: any): void;
    error(message: string): void;
    throwError(message: string): void;
}
//# sourceMappingURL=Logger.d.ts.map