import * as React from "react";
import { Dispatch } from "redux";
import { GatsbyLinkProps } from "gatsby-link";
import { MenuProps } from "../Menu";
interface SidebarMenuProps extends MenuProps {
    visible?: boolean;
    dispatch?: Dispatch<any>;
    Link: React.ComponentClass<GatsbyLinkProps<any>>;
}
export declare const SidebarMenu: ({ items, pathname, Link, visible }: SidebarMenuProps) => JSX.Element;
declare const _default: any;
export default _default;
//# sourceMappingURL=SidebarMenu.d.ts.map