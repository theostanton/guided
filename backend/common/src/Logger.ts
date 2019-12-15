export enum Level {
    INFO,
    WARNING,
    DEBUG,
    ERROR
}

export type LoggerFunctions = {
    info: (message: string) => void
    debug: (message: string) => void
    warning: (message: string) => void
    error: (message: string) => void
    throwError: (message: string) => void
}

export class Logger {

    static build(label: string, level: Level = Level.DEBUG): LoggerFunctions {
        const logger = new Logger(label, level);
        return {
            debug: logger.debug,
            error: logger.error,
            info: logger.info,
            throwError: logger.throwError,
            warning: logger.warning
        }
    }

    level: Level;
    label: string;

    constructor(label: string, level: Level = Level.DEBUG) {
        this.label = label;
        this.level = level;
    }

    buildMessage(message: string): string {
        return `${this.label}: ${message}`
    }

    info(message: string) {
        if (this.level <= Level.INFO) {
            console.info(this.buildMessage(message))
        }
    }

    debug(message: string) {
        if (this.level <= Level.DEBUG) {
            console.log(this.buildMessage(message))
        }
    }

    warning(message: string) {
        if (this.level <= Level.WARNING) {
            console.warn(this.buildMessage(message))
        }
    }

    json(object: any) {
        if (this.level <= Level.DEBUG) {
            console.info(JSON.stringify(object, null, 4))
        }
    }

    error(message: string) {
        console.error(this.buildMessage(message))
    }

    throwError(message: string) {
        console.error(this.buildMessage(message));
        throw new Error(this.buildMessage(message));
    }
}