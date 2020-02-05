import Listr, { ListrTask, ListrTaskWrapper } from "listr"
import fs from "fs"
import { database } from "@guided/tools"

export default async function(): Promise<void> {
  const rootDirectoryName = "src/sequence/sql"
  const tasks: ListrTask[] = []

  tasks.push({
    title: "Current user",
    task: async (_, task: ListrTaskWrapper) => {
      const result = await database.one("select current_user")
      task.title = `Current user: ${result.current_user}`
    },
  })

  const root = fs.readdirSync(rootDirectoryName)

  for (const directoryName of root) {
    const subtasks: ListrTask[] = []
    const directory = fs.readdirSync(`${rootDirectoryName}/${directoryName}`)
    for (const fileName of directory) {
      subtasks.push({
        title: fileName.split(".")[1],
        task: async (_, task: ListrTaskWrapper) => {
          const file = fs.readFileSync(`${rootDirectoryName}/${directoryName}/${fileName}`)
          task.output = `fileName=${fileName}`
          await database.query(file.toString())
        },
      })
    }

    const task: ListrTask = {
      title: directoryName.split(".")[1],
      task: () => {
        return new Listr(subtasks, {
          exitOnError: true,
          concurrent: false,
        })
      },
    }
    tasks.push(task)
  }


  await new Listr(tasks, {
    concurrent: false,
    exitOnError: true,
  }).run()
}