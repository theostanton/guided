"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("source-map-support/register");
exports.hello = async (event, context) => {
    console.log('context', context);
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
            event,
            context,
        }, null, 2),
    };
};
//# sourceMappingURL=handler.js.map