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
const react_redux_1 = require("react-redux");
const store_1 = require("../../store");
const semantic_ui_react_1 = require("semantic-ui-react");
exports.HeaderMenu = ({ items, pathname, Link, inverted, dispatch }) => <semantic_ui_react_1.Container>
    <semantic_ui_react_1.Menu size="large" pointing secondary inverted={inverted}>
      <semantic_ui_react_1.Menu.Item as="a" className="mobile only" icon="sidebar" onClick={() => dispatch && dispatch(store_1.toggleSidebar())}/>
      <semantic_ui_react_1.Menu.Item className="mobile hidden"><semantic_ui_react_1.Icon name="spy" size="big"/></semantic_ui_react_1.Menu.Item>
      {items.map((item) => {
    const active = (item.exact) ? pathname === item.path : pathname.startsWith(item.path);
    return <semantic_ui_react_1.Menu.Item as={Link} className="mobile hidden" name={item.name} to={item.path} key={item.path} active={active}/>;
})}
    </semantic_ui_react_1.Menu>
  </semantic_ui_react_1.Container>;
exports.default = react_redux_1.connect()(exports.HeaderMenu);
