"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const Layout_1 = __importDefault(require("components/root/Layout"));
const semantic_ui_react_1 = require("semantic-ui-react");
const version = require("../../../package.json").version;
class AboutPage extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {};
    }
    render() {
        return <Layout_1.default>
      <semantic_ui_react_1.Header>About</semantic_ui_react_1.Header>
      <p>Version={version}</p>
    </Layout_1.default>;
    }
}
exports.default = AboutPage;
//# sourceMappingURL=about.jsx.map