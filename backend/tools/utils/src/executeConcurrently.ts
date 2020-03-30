export default async function <T, R>(params: T[], action: (t: T) => Promise<R>): Promise<R[]> {
  return Promise.all(params.map(t => {
    return action(t)
  }))
}