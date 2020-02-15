import { isBoolean } from "util"

export function insertOne(tableName: string, item: any): string {
  if (item) {
    return insertMany(tableName, [item])
  } else {
    return ""
  }

}

export function insertMany(tableName: string, items: any[]): string {

  items = items.filter(value => value)

  if (items.length === 0) {
    return ""
  }

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

  const values = items.map((item: any) => {
    return `(${extract(item)})`
  }).join(",")

  const columns = `("${Object.keys(items[0]).join("\", \"")}")`


  return `
insert into ${tableName} ${columns}
values ${values};
  `
}
