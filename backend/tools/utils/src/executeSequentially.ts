export default async function <T, R>(
    params: T[],
    action: (t: T) => Promise<R>
): Promise<R[]> {
    return params.reduce(async (previousPromise: Promise<R[]>, param: T) => {
        const context = await previousPromise
        return action(param).then((r) => {
            return [...context, r]
        })
    }, Promise.resolve([]))
}
