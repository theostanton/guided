import { isBoolean } from "util"
import { logJson } from "@guided/logger"

function extract(any: any): string {
  return Object.values(any).map((value: any | undefined | null) => {

    function log(type: string) {
      // console.log(`${value} is a ${type}`)
    }

    if (value instanceof Date) {
      log("Date")
      return `'${value.toISOString()}'`
    } else if (value instanceof Boolean) {
      log("Boolean")
      return value ? "true" : "false"
    } else if (typeof value === "number") {
      log("unmber")
      return value
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
  }).join(",")
}

export function insertOne(tableName: string, item: any): string {
  if (item) {
    return insertMany(tableName, [item])
  } else {
    return ""
  }
}

export function updateOne<T>(tableName: string, item: Partial<T>, onColumn: string = "id"): string {
  const columns = Object.keys(item).filter(key => {
    return key !== onColumn
  })
  return updateMany(tableName, [item], columns, onColumn)
}

export function updateMany(tableName: string, items: any[], columns: string[], onColumn: string = "id"): string {

  if (columns.includes(onColumn)) {
    throw new Error(`Not smart enough to update on matched column, yet`)
  }

  items = items.map(item => {
    const insertItem: any = {}
    insertItem[onColumn] = item[onColumn]
    Object.keys(item)
      .filter(key => {
        return columns.includes(key)
      })
      .forEach(key => {
        insertItem[key] = item[key]
      })
    return insertItem
  })

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

  return `
  update ${tableName} as t
  set ${sets}
from (values${values}) as c("${onColumn}"${columnNames.length ? ", " + columnNames : ""})
where t."${onColumn}" = c."${onColumn}"
returning t."${onColumn}"
  `
}

export function insertMany(tableName: string, items: any[]): string {

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
values ${values};
  `
}
