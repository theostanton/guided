import { GuideRow } from "../../../database/types";
import { QueryToGuideArgs } from "@guided/common";
declare function guide(_: void, { slug }: QueryToGuideArgs): Promise<GuideRow | null>;
declare function allGuides(_: void, args: void): Promise<GuideRow[]>;
export { guide, allGuides };
//# sourceMappingURL=guides.d.ts.map