import sequence from "../sequence"

export default async function(): Promise<void> {
  await sequence("create")
}