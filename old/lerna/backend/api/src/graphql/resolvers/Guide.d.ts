import { GuideRow, StayRow, UserRow } from "../../database/types";
import { Guide } from '@guided/common';
declare function stays(guide: Guide): Promise<StayRow[]>;
declare function user(guide: GuideRow): Promise<UserRow>;
declare const _default: {
    stays: typeof stays;
    user: typeof user;
};
export default _default;
//# sourceMappingURL=Guide.d.ts.map