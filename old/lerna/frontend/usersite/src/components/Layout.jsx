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
const gatsby_1 = require("gatsby");
const React = __importStar(require("react"));
const HeaderMenu_1 = __importDefault(require("./HeaderMenu/HeaderMenu"));
const SidebarMenu_1 = __importDefault(require("./SidebarMenu/SidebarMenu"));
const semantic_ui_react_1 = require("semantic-ui-react");
require("../css/styles.css");
require("../css/responsive.css");
require("../css/semantic.min.css");
require("prismjs/themes/prism-okaidia.css");
const react_redux_1 = require("react-redux");
const store_1 = require("../store");
exports.menuItems = [
    { name: "Home", path: "/", exact: true, icon: "home", inverted: true },
    { name: "About", path: "/about/", exact: true, icon: "info circle" },
    { name: "Blog", path: "/blog/", exact: false, icon: "newspaper" },
];
const Layout = (props) => {
    const { pathname } = props.location;
    const isHome = pathname === "/";
    return (<react_redux_1.Provider store={store_1.store}>
      <semantic_ui_react_1.Sidebar.Pushable as={semantic_ui_react_1.Segment}>

        <SidebarMenu_1.default Link={gatsby_1.Link} pathname={pathname} items={exports.menuItems} visible={false}/>

        <semantic_ui_react_1.Sidebar.Pusher style={{ minHeight: "100vh" }}>
          
          {isHome ? null : <HeaderMenu_1.default Link={gatsby_1.Link} pathname={pathname} items={exports.menuItems}/>}

          
          <div style={{ paddingBottom: 60 }}>
            {props.children}
          </div>

          
          <semantic_ui_react_1.Segment inverted vertical style={{ position: "absolute", bottom: 0, width: "100%" }}>
            <semantic_ui_react_1.Container textAlign="center">
              <p>Powered with <semantic_ui_react_1.Icon name="heart"/> by Gatsby 2.0</p>
            </semantic_ui_react_1.Container>
          </semantic_ui_react_1.Segment>
        </semantic_ui_react_1.Sidebar.Pusher>
      </semantic_ui_react_1.Sidebar.Pushable>
    </react_redux_1.Provider>);
};
exports.default = Layout;
exports.withLayout = (WrappedComponent) => class WithLayout extends React.Component {
    render() {
        return (<Layout location={this.props.location}>
          <WrappedComponent {...this.props}/>
        </Layout>);
    }
};
