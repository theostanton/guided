import { UserRow } from "../../../database/types";
declare function user(_: void, { id }: {
    id: string;
}): Promise<UserRow | null>;
declare function allUsers(_: void, args: void): Promise<UserRow[]>;
export { user, allUsers };
//# sourceMappingURL=users.d.ts.map