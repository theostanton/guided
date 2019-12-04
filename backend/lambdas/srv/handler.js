var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import 'source-map-support/register';
export const hello = (event, context) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('context', context);
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
            event,
            context,
        }, null, 2),
    };
});
//# sourceMappingURL=handler.js.map