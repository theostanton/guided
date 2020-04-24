import { LocalLogger } from './LocalLogger'

export interface Logger {
    log(message: string, label?: string): void;

    json(object: any, label?: string): void;

    info(message: string): void;

    error(message: string): void;
}

const logger = new LocalLogger()
export default logger
const { log, error: logError, info: logInfo, json: logJson } = logger
export { log, logError, logInfo, logJson }
