export default function(): string {

  if (!process.env.OWNER_USER) {
    throw new Error("Need OWNER_ variables")
  }

  return `postgres://${process.env.OWNER_USER}:${encodeURIComponent(process.env.OWNER_PASSWORD!)}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DB}`
}