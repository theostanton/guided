/// <reference types="react" />
import { Dispatch } from "redux";
import { MenuProps } from "../Menu";
interface HeaderMenuProps extends MenuProps {
    dispatch?: Dispatch<any>;
    inverted?: boolean;
}
export declare const HeaderMenu: ({ items, pathname, Link, inverted, dispatch }: HeaderMenuProps) => JSX.Element;
declare const _default: any;
export default _default;
//# sourceMappingURL=HeaderMenu.d.ts.map