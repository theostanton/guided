"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const withReadme = require("storybook-readme/with-readme").default;
const SidebarMenuReadme = require("./README.md");
const React = __importStar(require("react"));
const react_1 = require("@storybook/react");
const addon_actions_1 = require("@storybook/addon-actions");
const addon_knobs_1 = require("@storybook/addon-knobs");
const SidebarMenu_1 = require("./SidebarMenu");
const items = [
    { name: "Home", path: "/", exact: true, icon: "home" },
    { name: "About", path: "/about/", exact: true, icon: "info circle" },
    { name: "Blog", path: "/blog/", exact: false, icon: "newspaper" },
];
const LinkStub = (props) => <div {...props} onClick={addon_actions_1.action(props.to.toString())}>{props.children}</div>;
react_1.storiesOf("SidebarMenu", module)
    .addDecorator(addon_knobs_1.withKnobs)
    .addDecorator(withReadme(SidebarMenuReadme))
    .add("default", () => {
    const pathname = addon_knobs_1.text("pathname", "/");
    return (<SidebarMenu_1.SidebarMenu Link={LinkStub} items={items} pathname={pathname} visible/>);
});
