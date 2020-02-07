import { log } from "@guided/logger"

let loaded = false

function load() {

  if (loaded) {
    return
  }

  if (!process.env.STAGE) {
    throw new Error("No STAGE env")
  }

  if (process.env.STAGE ! in ["staging", "local"]) {
    throw new Error(`STAGE=${process.env.STAGE} is not valid`)
  }

  log(__dirname,'__dirname')
  const path = __dirname + `/../../../.env.${process.env.STAGE}`
  log(path,'path')

  require("dotenv").config({
    path,
  })

  loaded = true
  console.log(`Loaded stage=${process.env.STAGE}`)
  if (process.env.LOADED !== "true") {
    throw new Error(`Failed to load envs. process.env.LOADED=${process.env.LOADED}`)
  }
}

load()
