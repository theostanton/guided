"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const semantic_ui_react_1 = require("semantic-ui-react");
exports.HeaderMenu = ({ items, pathname, Link, inverted }) => React.createElement(semantic_ui_react_1.Container, null,
    React.createElement(semantic_ui_react_1.Menu, { size: "large", pointing: true, secondary: true, inverted: inverted },
        React.createElement(semantic_ui_react_1.Menu.Item, { as: "a", className: "mobile only", icon: "sidebar", onClick: () => {
            } }),
        React.createElement(semantic_ui_react_1.Menu.Item, { className: "mobile hidden" },
            React.createElement(semantic_ui_react_1.Icon, { name: "spy", size: "big" })),
        items.map((item) => {
            const active = (item.exact) ? pathname === item.path : pathname.startsWith(item.path);
            return React.createElement(semantic_ui_react_1.Menu.Item, { as: Link, className: "mobile hidden", name: item.name, to: item.path, key: item.path, active: active });
        })));
exports.default = exports.HeaderMenu;
//# sourceMappingURL=HeaderMenu.js.map