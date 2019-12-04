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
const NotFoundPage = () => React.createElement(semantic_ui_react_1.Grid, { centered: true, verticalAlign: "middle", style: {
        minHeight: "700px",
    } },
    React.createElement(semantic_ui_react_1.Grid.Column, null,
        React.createElement(semantic_ui_react_1.Grid.Row, { style: { textAlign: "center" } },
            React.createElement(semantic_ui_react_1.Icon, { name: "marker", size: "huge" }),
            React.createElement(semantic_ui_react_1.Header, { as: "h1" }, "You are here!"),
            React.createElement(semantic_ui_react_1.Header, { as: "h2" }, "But nothing found for you #404"))));
exports.default = Layout_1.withLayout(NotFoundPage);
//# sourceMappingURL=404.js.map