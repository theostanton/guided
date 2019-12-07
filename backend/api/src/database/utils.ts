import slugify from 'slugify'

export function generateId(prefix?: string): string {
    const id = Math.random().toString().substring(3, 10);
    if (prefix) {
        return `${prefix}_${id}`
    } else {
        return id;
    }
}

export function generateSlug(from:string):string {
    return slugify(from,{
        lower:true
    })
}