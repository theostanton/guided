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
const semantic_ui_react_1 = require("semantic-ui-react");
const router_1 = require("@reach/router");
const Guide_1 = __importDefault(require("components/content/Guide"));
const Profile_1 = __importDefault(require("components/content/Profile"));
class ContentComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {};
    }
    render() {
        return (<>
        <semantic_ui_react_1.Container>
          <div>
            <router_1.Router>
              <Guide_1.default path="/content/:user/:slug"/>
              <Profile_1.default path="/content/:user"/>
            </router_1.Router>
          </div>
        </semantic_ui_react_1.Container>
      </>);
    }
}
exports.default = ContentComponent;
//# sourceMappingURL=content.jsx.map