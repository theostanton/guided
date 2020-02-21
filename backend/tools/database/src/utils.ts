import { isBoolean } from "util"

function extract(any: any): string {
  return Object.values(any).map((value: any | undefined | null) => {
    if (value instanceof Date) {
      return `'${value.toISOString()}'`
    } else if (value instanceof Boolean) {
      return value ? "true" : "false"
    } else if (isBoolean(value)) {
      return value ? "true" : "false"
    } else if (value instanceof Object) {
      return `'${JSON.stringify(value)}'`
    } else if (value != undefined) {
      return `'${value.toString()}'`
    } else {
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

export function updateMany(tableName: string, items: any[], columns: string[], onColumn: string): string {


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
