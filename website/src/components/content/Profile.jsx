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
class ProfileComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {};
    }
    render() {
        return <>
      <semantic_ui_react_1.Header>Profile</semantic_ui_react_1.Header>
      <p>{JSON.stringify(this.props, null, 4)}</p>
    </>;
    }
}
exports.default = ProfileComponent;
//# sourceMappingURL=Profile.jsx.map