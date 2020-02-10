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
exports.default = () => {
    return (<semantic_ui_react_1.Segment vertical>
      <semantic_ui_react_1.Header as="h2">
        <semantic_ui_react_1.Icon name="newspaper"/>
        <semantic_ui_react_1.Header.Content>
          Blog
            <semantic_ui_react_1.Header.Subheader>
            All about this starter kit
            </semantic_ui_react_1.Header.Subheader>
        </semantic_ui_react_1.Header.Content>
      </semantic_ui_react_1.Header>
    </semantic_ui_react_1.Segment>);
};
