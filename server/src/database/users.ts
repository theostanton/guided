import {User} from "../types";
import DB from '.'

export async function find(id: string): Promise<User | null> {
    return DB().oneOrNone<User>(`SELECT * FROM `)
}