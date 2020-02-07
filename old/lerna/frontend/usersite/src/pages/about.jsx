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
    return (<semantic_ui_react_1.Container>
      <semantic_ui_react_1.Segment vertical>
        <semantic_ui_react_1.Header as="h2">
          <semantic_ui_react_1.Icon name="info circle"/>
          <semantic_ui_react_1.Header.Content>
            About
          </semantic_ui_react_1.Header.Content>
        </semantic_ui_react_1.Header>
      </semantic_ui_react_1.Segment>
      <semantic_ui_react_1.Segment vertical>
        <p>
          This starter was created by @fabien0102.
        </p>
        <p>
          For any question, I'm on <a href="https://discord.gg/2bz8EzW" target="blank">discord #reactiflux/gatsby</a>
        </p>
        <p>
          For any issues, any PR are welcoming
          <a href="https://github.com/fabien0102/gatsby-starter/issues" target="blank"> on this repository</a>
        </p>
      </semantic_ui_react_1.Segment>
    </semantic_ui_react_1.Container>);
};
exports.default = Layout_1.withLayout(AboutPage);
//# sourceMappingURL=about.jsx.map