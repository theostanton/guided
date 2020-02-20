import parse from "csv-parse/lib/sync"
import fs from "fs"
import { log, logJson } from "@guided/logger"
import { Temperature } from "@guided/database/srv/types"
import { database, generateId, insertMany } from "@guided/database"
import { actions } from "../index"

const TEMPS_FILENAME = __dirname + "src/load_temperatures/temperatures.csv"
const CODES_FILENAME = __dirname + "src/load_temperatures/codes.csv"

export default async function(): Promise<void> {
  const tempsFile = fs.readFileSync(TEMPS_FILENAME)
  const temperatureData: string[][] = parse(tempsFile, {
    from_line: 2,
  })
  logJson(temperatureData[0], "temperatureData[0]")

  const codesFile = fs.readFileSync(CODES_FILENAME)
  const codes: string[][] = parse(codesFile)
  logJson(codes[0], "codes[0]")

  const temperatures: Temperature[] = []
  logJson(temperatures, "temperatures")
  temperatureData.forEach((data: string[]) => {
    // logJson(data, "data")
    const code = codes.find((code: string[]) => {
      return code[2] === data[0]
    })
    if (!code) {
      log(`No code for ${data[0]}`)
      return
    }
    const country = code[1]
    logJson(country, "country")

    data.slice(1, 13).forEach((temperature: string, month: number) => {
      log(`${country} - ${temperature} - ${month}`)
      temperatures.push({
        id: generateId("temp"),
        country,
        month,
        temperature: parseFloat(temperature),
        created: new Date(),
        updated: null,
      })
    })
  })

  const insertQuery = insertMany("temperatures", temperatures)
  log(insertQuery)
  logJson(temperatures[0], "temperatures[0]")

  await actions.truncate()
  await database.none(insertQuery)

}