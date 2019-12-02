export default function <T>(invoke: () => T): () => T {
  let t: T;
  return function (): T {
    if (!t) {
      t = invoke()
    }
    return t
  }
}
