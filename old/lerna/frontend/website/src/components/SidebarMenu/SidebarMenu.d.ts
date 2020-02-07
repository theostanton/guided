import * as React from "react";
import { GatsbyLinkProps } from "gatsby-link";
import { MenuProps } from "../Menu";
interface SidebarMenuProps extends MenuProps {
    visible?: boolean;
    Link: React.ComponentClass<GatsbyLinkProps<any>>;
}
export declare const SidebarMenu: ({ items, pathname, Link, visible }: SidebarMenuProps) => JSX.Element;
export default SidebarMenu;
//# sourceMappingURL=SidebarMenu.d.ts.map