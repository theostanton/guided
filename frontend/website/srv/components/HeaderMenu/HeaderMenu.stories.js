"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable no-var-requires */
const withReadme = require("storybook-readme/with-readme").default;
const HeaderMenuReadme = require("./README.md");
const React = __importStar(require("react"));
const react_1 = require("@storybook/react");
const addon_actions_1 = require("@storybook/addon-actions");
const addon_knobs_1 = require("@storybook/addon-knobs");
const HeaderMenu_1 = require("./HeaderMenu");
const items = [
    { name: "Home", path: "/", exact: true },
    { name: "About", path: "/about/", exact: true },
    { name: "Blog", path: "/blog/", exact: false },
];
const LinkStub = (props) => React.createElement("div", Object.assign({}, props, { onClick: addon_actions_1.action(props.to.toString()) }), props.children);
const dispatchStub = (a) => addon_actions_1.action(a.type)(a) && a;
react_1.storiesOf("HeaderMenu", module)
    .addDecorator(addon_knobs_1.withKnobs)
    .addDecorator(withReadme(HeaderMenuReadme))
    .add("default", () => {
    const pathname = addon_knobs_1.text("pathname", "/");
    const inverted = addon_knobs_1.boolean("inverted", false);
    return (React.createElement(HeaderMenu_1.HeaderMenu, { Link: LinkStub, items: items, pathname: pathname, inverted: inverted, dispatch: dispatchStub }));
});
//# sourceMappingURL=HeaderMenu.stories.js.map