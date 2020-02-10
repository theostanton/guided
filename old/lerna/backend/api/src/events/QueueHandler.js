"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bull_1 = __importDefault(require("bull"));
class QueueHandler {
    constructor(queue) {
        this.queue = queue;
        this.bull = new bull_1.default(queue);
    }
    async subscribe() {
        return this.bull.process(20, async (job, done) => {
            await this.handle(job.data, done);
            done();
        }).then(value => {
            console.log('onProcess');
        }).catch(err => {
            console.error(err);
        });
    }
    async add(t) {
        await this.bull.add(t);
        console.log(`count=${await this.bull.count()}`);
    }
}
exports.QueueHandler = QueueHandler;
