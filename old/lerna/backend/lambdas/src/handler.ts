import {APIGatewayProxyEvent, APIGatewayProxyHandler, Context} from 'aws-lambda';
import 'source-map-support/register';

export const hello: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent, context: Context) => {
    console.log('context', context);
    return {
        statusCode: 200,
        // @ts-ignore
        body: JSON.stringify({
            message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
            event,
            context,
        }, null, 2),
    };
};
