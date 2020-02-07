"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const listr_1 = __importDefault(require("listr"));
const fs_1 = __importDefault(require("fs"));
const database_1 = require("@guided/database");
async function default_1() {
    const rootDirectoryName = "src/sequence/sql";
    const tasks = [];
    tasks.push({
        title: "Current user",
        task: async (_, task) => {
            const result = await database_1.database.one("select current_user");
            task.title = `Current user: ${result.current_user}`;
        },
    });
    const root = fs_1.default.readdirSync(rootDirectoryName);
    for (const directoryName of root) {
        const subtasks = [];
        const directory = fs_1.default.readdirSync(`${rootDirectoryName}/${directoryName}`);
        for (const fileName of directory) {
            subtasks.push({
                title: fileName.split(".")[1],
                task: async (_, task) => {
                    const file = fs_1.default.readFileSync(`${rootDirectoryName}/${directoryName}/${fileName}`);
                    task.output = `fileName=${fileName}`;
                    await database_1.database.query(file.toString());
                },
            });
        }
        const task = {
            title: directoryName.split(".")[1],
            task: () => {
                return new listr_1.default(subtasks, {
                    exitOnError: true,
                    concurrent: false,
                });
            },
        };
        tasks.push(task);
    }
    await new listr_1.default(tasks, {
        concurrent: false,
        exitOnError: true,
    }).run();
}
exports.default = default_1;
//# sourceMappingURL=index.js.map