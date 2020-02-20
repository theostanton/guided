import sequence from "../sequence"

export default async function(): Promise<void> {
  console.log("truncating")
  await sequence("truncate")
}