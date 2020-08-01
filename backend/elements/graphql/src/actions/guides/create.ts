import { CreateGuideInput, CreateGuideResult } from '../../generated'
import slugify from 'slugify'
import { database, Guide } from '@guided/database'
import { logJson } from '@guided/logger'

export default async function (
    input: CreateGuideInput,
    owner: string
): Promise<CreateGuideResult> {
    const { title, isCircular, startDate, maxHoursPerRide, type } = input
    const slug = slugify(title, {
        lower: true,
        remove: /[*+~.()'"!:@_]/g,
    })
    const guideId = `${owner}_${slug}`

    const guide: Guide = {
        id: guideId,
        slug,
        title,
        owner,
        is_circular: isCircular || false,
        start_date: startDate || null,
        max_hours_per_ride: maxHoursPerRide,
        transport_type: type,
        created: new Date(),
        updated: null,
    }

    logJson(guide, 'guide')

    const result = await database.oneOrNone<{ title: string }>(
        'select title from guides where id=$1',
        [guideId]
    )

    if (result) {
        return {
            success: false,
            message: `Guide already exists called '${result.title}'`,
        }
    }

    try {
        const result = await database.insertOne<Guide>('guides', guide)
        logJson(result, 'result')
        if (result && result.id) {
            return {
                success: true,
                guideId: result.id,
                owner,
                slug
            }
        } else {
            return {
                success: false,
                message: 'Failed to create guide',
            }
        }
    } catch (e) {
        return {
            success: false,
            message: e.message,
        }
    }
}
