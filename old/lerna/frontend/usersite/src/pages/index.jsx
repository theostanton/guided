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
const gatsby_1 = require("gatsby");
const HeaderMenu_1 = __importDefault(require("../components/HeaderMenu/HeaderMenu"));
const Layout_1 = require("../components/Layout");
const semantic_ui_react_1 = require("semantic-ui-react");
const IndexPage = (props) => <div>
    
    <semantic_ui_react_1.Segment vertical inverted textAlign="center" className="masthead">
      <HeaderMenu_1.default Link={gatsby_1.Link} pathname={props.location.pathname} items={Layout_1.menuItems} inverted/>
      <semantic_ui_react_1.Container text>
        <semantic_ui_react_1.Header inverted as="h1">Gatsby 2.0 - Starter kit</semantic_ui_react_1.Header>
        <semantic_ui_react_1.Header inverted as="h2">Typescript - Jest - Semantic UI</semantic_ui_react_1.Header>
        <semantic_ui_react_1.Button primary size="huge">Get started!</semantic_ui_react_1.Button>
      </semantic_ui_react_1.Container>
    </semantic_ui_react_1.Segment>

    
    <semantic_ui_react_1.Segment vertical className="stripe">
      <semantic_ui_react_1.Grid stackable verticalAlign="middle" className="container">
        <semantic_ui_react_1.Grid.Row>
          <semantic_ui_react_1.Grid.Column width="8">
            <semantic_ui_react_1.Header>Lorem ipsum</semantic_ui_react_1.Header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Porro laudantium ad, quae, perspiciatis ipsa distinctio.
                </p>
            <semantic_ui_react_1.Header>Dolor sit amet</semantic_ui_react_1.Header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Porro laudantium ad, quae, perspiciatis ipsa distinctio.
                </p>
          </semantic_ui_react_1.Grid.Column>
          <semantic_ui_react_1.Grid.Column width="6" floated="right">
            
            <semantic_ui_react_1.Header>Lorem ipsum</semantic_ui_react_1.Header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Porro laudantium ad, quae, perspiciatis ipsa distinctio.
                </p>
            <semantic_ui_react_1.Header>Dolor sit amet</semantic_ui_react_1.Header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Porro laudantium ad, quae, perspiciatis ipsa distinctio.
                </p>
          </semantic_ui_react_1.Grid.Column>
        </semantic_ui_react_1.Grid.Row>
      </semantic_ui_react_1.Grid>
    </semantic_ui_react_1.Segment>

    
    <semantic_ui_react_1.Segment vertical className="stripe alternate feature">
      <semantic_ui_react_1.Grid columns="3" textAlign="center" divided relaxed stackable className="container">
        <semantic_ui_react_1.Grid.Row>
          <semantic_ui_react_1.Grid.Column>
            <semantic_ui_react_1.Header icon>
              <semantic_ui_react_1.Icon name="wizard"></semantic_ui_react_1.Icon>
              A kind of magic!
            </semantic_ui_react_1.Header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptas eaque at quae cupiditate aspernatur quibusdam!
                  Distinctio quod non, harum dolorum earum molestias,
                  beatae expedita aliquam dolorem asperiores nemo amet quaerat.
                </p>
          </semantic_ui_react_1.Grid.Column>
          <semantic_ui_react_1.Grid.Column>
            <semantic_ui_react_1.Header icon>
              <semantic_ui_react_1.Icon name="wizard"></semantic_ui_react_1.Icon>
              A kind of magic!
            </semantic_ui_react_1.Header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptas eaque at quae cupiditate aspernatur quibusdam!
                  Distinctio quod non, harum dolorum earum molestias,
                  beatae expedita aliquam dolorem asperiores nemo amet quaerat.
                </p>
          </semantic_ui_react_1.Grid.Column>
          <semantic_ui_react_1.Grid.Column>
            <semantic_ui_react_1.Header icon>
              <semantic_ui_react_1.Icon name="wizard"></semantic_ui_react_1.Icon>
              A kind of magic!
            </semantic_ui_react_1.Header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptas eaque at quae cupiditate aspernatur quibusdam!
                  Distinctio quod non, harum dolorum earum molestias,
                  beatae expedita aliquam dolorem asperiores nemo amet quaerat.
                </p>
          </semantic_ui_react_1.Grid.Column>
        </semantic_ui_react_1.Grid.Row>
      </semantic_ui_react_1.Grid>
    </semantic_ui_react_1.Segment>
  </div>;
exports.default = Layout_1.withLayout(IndexPage);
