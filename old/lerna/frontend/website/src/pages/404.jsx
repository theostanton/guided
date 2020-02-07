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
const NotFoundPage = () => <semantic_ui_react_1.Grid centered verticalAlign="middle" style={{
    minHeight: "700px",
}}>
      <semantic_ui_react_1.Grid.Column>
        <semantic_ui_react_1.Grid.Row style={{ textAlign: "center" }}>
          <semantic_ui_react_1.Icon name="marker" size="huge"/>
          <semantic_ui_react_1.Header as="h1">You are here!</semantic_ui_react_1.Header>
          <semantic_ui_react_1.Header as="h2">But nothing found for you #404</semantic_ui_react_1.Header>
        </semantic_ui_react_1.Grid.Row>
      </semantic_ui_react_1.Grid.Column>
    </semantic_ui_react_1.Grid>;
exports.default = Layout_1.withLayout(NotFoundPage);
//# sourceMappingURL=404.jsx.map