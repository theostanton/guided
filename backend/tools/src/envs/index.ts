let loaded = false

function load() {

  if (loaded) {
    return
  }

  if (!process.env.STAGE) {
    throw new Error("No STAGE env")
  }

  const path = `../.env.${process.env.STAGE}`

  require("dotenv").config({
    path,
  })

  loaded = true
  console.log(`Loaded ${path}`)
}

load()
