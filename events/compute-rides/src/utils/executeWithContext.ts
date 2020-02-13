export default async function <T, C>(params: T[], action: (item: T, context: C) => Promise<C>, c: C): Promise<C> {
  return params.reduce(async (previousPromise: Promise<C>, param: T) => {
    const context = await previousPromise
    return action(param, context)
  }, Promise.resolve(c))
}