import Listr, { ListrTask, ListrTaskWrapper } from "listr"
import fs from "fs"
import { database } from "@guided/database"
import { log } from "@guided/logger"

function getDirectoryNames(parentDirectoryName: string): string[] {
  const directories = fs.readdirSync(parentDirectoryName)
  const directoriNames: string[] = []
  directories.forEach(directory => {
    if (directory.includes(".")) {
      directoriNames.push(directory.toString())
    }
  })
  return directoriNames
}

function getFileNames(directoryName: string): string[] {
  const directories = fs.readdirSync(directoryName)
  const directoriNames: string[] = []
  directories.forEach(directory => {
    if (directory.includes(".")) {
      directoriNames.push(directory.toString())
    }
  })
  return directoriNames
}

function createTask(fileName: string): ListrTask {
  return {
    title: fileName.split(".")[1],
    task: async (_, task: ListrTaskWrapper) => {
      const file = fs.readFileSync(fileName)
      task.output = `fileName=${fileName}`
      await database.query(file.toString())
    },
  }
}

export default async function(directory: string): Promise<void> {
  const rootDirectoryName = `src/${directory}`
  const tasks: ListrTask[] = []

  const directoryNames = getDirectoryNames(rootDirectoryName)
  log(rootDirectoryName, "rootDirectoryName")
  log(directoryNames.length.toString(), "directoryNames")

  if (directoryNames.length > 0) {
    directoryNames.forEach(directoryName => {
      const filenames = getFileNames(directoryName)
      log(directoryName, "directoryName")
      log(filenames.length.toString(), "filenames")
      const subtasks: ListrTask[] = []
      filenames.forEach(filename => {
        subtasks.push(createTask(`${rootDirectoryName}/${filename}`))
      })
      const task: ListrTask = {
        title: directoryName.split(".")[1],
        skip: () => subtasks.length > 0,
        task: () => {
          return new Listr(subtasks, {
            exitOnError: true,
            concurrent: false,
          })
        },
      }
      tasks.push(task)
    })
  } else {
    const filenames = getFileNames(rootDirectoryName)
    if (filenames.length > 0) {
      filenames.forEach(filename => {
        tasks.push(createTask(`${rootDirectoryName}/${filename}`))
      })
    } else {
      throw new Error(`No sql files foudn for directory=${directory}`)
    }
  }

  await new Listr(tasks, {
    concurrent: false,
    exitOnError: true,
  }).run()
}