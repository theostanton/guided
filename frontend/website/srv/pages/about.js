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
const Layout_1 = require("../components/Layout");
const AboutPage = () => {
    return (React.createElement(semantic_ui_react_1.Container, null,
        React.createElement(semantic_ui_react_1.Segment, { vertical: true },
            React.createElement(semantic_ui_react_1.Header, { as: "h2" },
                React.createElement(semantic_ui_react_1.Icon, { name: "info circle" }),
                React.createElement(semantic_ui_react_1.Header.Content, null, "About"))),
        React.createElement(semantic_ui_react_1.Segment, { vertical: true },
            React.createElement("p", null, "This starter was created by @fabien0102.?"),
            React.createElement("p", null,
                "For any question, I'm on ",
                React.createElement("a", { href: "https://discord.gg/2bz8EzW", target: "blank" }, "discord #reactiflux/gatsby")),
            React.createElement("p", null,
                "For any issues, any PR are welcoming",
                React.createElement("a", { href: "https://github.com/fabien0102/gatsby-starter/issues", target: "blank" }, " on this repository")))));
};
exports.default = Layout_1.withLayout(AboutPage);
//# sourceMappingURL=about.js.map