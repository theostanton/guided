export default async function <T>(params: T[], action: (t: T) => Promise<any>): Promise<any> {
    // console.log(`executeSequentially ${params.length} items params[0]=${params[0]}`);
    return params.reduce(async (previousPromise: Promise<any>, param: T, index: number) => {
        await previousPromise;

        // console.log(`${index + 1}/${params.length} param=${JSON.stringify(param, null, 4)}`);
        return action(param);
    }, Promise.resolve());
}