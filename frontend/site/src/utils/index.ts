import {Guide} from "api/generated";

export function guideId(guide: Pick<Guide, 'owner' | 'slug'>): string {
  return `${guide.owner}_${guide.slug}`
}