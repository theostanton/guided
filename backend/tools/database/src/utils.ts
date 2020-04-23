import { isBoolean } from "util"
import { logJson } from "@guided/logger"
import { TransportType } from "./types"

function extractValue(value: any): string {

  function log(type: string) {
    // console.log(`${value} is a ${type}`)
  }

  if (["MOTORCYCLE", "BICYCLE", "CAR"].includes(value)) {
    log("TransportType")
    return `'${value}'::transport_type`
  } else if (value instanceof Date) {
    log("Date")
    return `'${value.toISOString()}'::timestamptz`
  } else if (value instanceof Boolean) {
    log("Boolean")
    return value ? "true" : "false"
  } else if (typeof value === "number") {
    log("number")
    return value.toString()
  } else if (isBoolean(value)) {
    log("isBoolean")
    return value ? "true" : "false"
  } else if (value instanceof Object) {
    log("Object")
    return `'${JSON.stringify(value)}'`
  } else if (value != undefined) {
    log("value != undefined")
    return `'${value.toString()}'`
  } else {
    log("fallthrough")
    return "null"
  }
}

function extract(any: any): string {
  return Object.values(any).map((value: any | undefined | null) => {
    return extractValue(value)
  }).join(",")
}

export function insertOne<T>(tableName: string, item: T, returning: string | undefined = undefined): string {
  if (item) {
    return insertMany(tableName, [item], returning)
  } else {
    return ""
  }
}

export function updateOne<T>(tableName: string, item: Partial<T>, onColumn: string = "id", oldOnColumnValue: string | undefined = undefined): string {
  const columns = Object.keys(item)

  const condition = `${onColumn} = '${oldOnColumnValue || (item as any)[onColumn]}'`

  const sets = columns
    .filter((column) => {
      return !!oldOnColumnValue || column !== onColumn
    })
    .map((column) => {
      const value = extractValue((item as any)[column])
      return `"${column}" = ${value}`
    })
    .join(",\n")

  return `update ${tableName}
  set ${sets} 
  where ${condition} 
  returning "${onColumn}"`
}

export function updateMany(tableName: string, items: any[], columns: string[], onColumn: string = "id", oldOnColumnValue: string | undefined = undefined): string {


  items = items.map(item => {
    const updateItem: any = {}
    updateItem[onColumn] = item[onColumn]
    Object.keys(item)
      .filter(key => {
        return columns.includes(key)
      })
      .forEach(key => {
        updateItem[key] = item[key]
      })
    return updateItem
  })

  logJson(items, "items")

  if (items.length === 0) {
    return ""
  }

  const values = items.map((item: any) => {
    return `(${extract(item)})`
  }).join(",")

  const sets = columns.map(column => {
    return `"${column}" = c."${column}"`
  }).join(",")

  const columnNames = columns
    .filter(column => {
      return column != onColumn
    })
    .map(column => {
      return `"${column}"`
    }).join(",")

  const condition = oldOnColumnValue ? `t."${onColumn}" = '${oldOnColumnValue}'` : `t."${onColumn}" = c."${onColumn}"`

  return `
    update ${tableName} as t
    set ${sets}
    from (values${values}) as c("${onColumn}"${columnNames.length ? ", " + columnNames : ""})
    where ${condition}
    returning t."${onColumn}"
  `
}

export function insertMany(tableName: string, items: any[], returning: string | undefined = undefined): string {

  items = items.filter(value => value)

  if (items.length === 0) {
    return ""
  }

  const values = items.map((item: any) => {
    return `(${extract(item)})`
  }).join(",")

  const columns = `("${Object.keys(items[0]).join("\", \"")}")`


  return `
insert into ${tableName} ${columns}
values ${values}
${returning ? `returning ${returning} as id;` : ";"}
  `
}

export function castTimestamp(date: Date): string {
  return ""
}