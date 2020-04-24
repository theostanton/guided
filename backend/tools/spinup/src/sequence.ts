import Listr, { ListrTask, ListrTaskWrapper } from 'listr'
import fs from 'fs'
import { database } from '@guided/database'
import path from 'path'

function getPath(fileName: string): string {
    return path.resolve(__dirname, `../${fileName}`)
}

function getDirectoryNames(parentDirectoryName: string): string[] {
    const files = fs.readdirSync(getPath(parentDirectoryName), {
        withFileTypes: true,
    })
    return files
        .filter((file) => {
            return file.isDirectory() && file.name.includes('.')
        })
        .map((file) => {
            return file.name
        })
}

function getFileNames(directoryName: string): string[] {
    const files = fs.readdirSync(getPath(directoryName), {
        withFileTypes: true,
    })
    return files
        .filter((file) => {
            return file.isFile() && file.name.includes('.sql')
        })
        .map((file) => {
            return file.name
        })
}

export async function executeFile(fileName: string): Promise<void> {
    const file = fs.readFileSync(getPath(fileName))
    await database.query(file.toString())
}

function createTask(fileName: string): ListrTask {
    const parts = fileName.split('.')
    return {
        title: parts[parts.length - 2],
        task: async (_, task: ListrTaskWrapper) => {
            task.output = `fileName=${fileName}`
            await executeFile(fileName)
        },
    }
}

export default async function (directory: string): Promise<void> {
    const rootDirectoryName = `src/${directory}`
    const tasks: ListrTask[] = []

    const directoryNames = getDirectoryNames(rootDirectoryName)
    if (directoryNames.length > 0) {
        directoryNames.forEach((directoryName) => {
            const filenames = getFileNames(
                `${rootDirectoryName}/${directoryName}`
            )
            const subtasks: ListrTask[] = []
            filenames.forEach((filename) => {
                subtasks.push(
                    createTask(
                        `${rootDirectoryName}/${directoryName}/${filename}`
                    )
                )
            })
            const parts = directoryName.split('.')
            const task: ListrTask = {
                title: parts[parts.length - 1],
                skip: () => subtasks.length === 0,
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
            filenames.forEach((filename) => {
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
