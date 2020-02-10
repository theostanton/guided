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
const semantic_ui_react_1 = require("semantic-ui-react");
exports.SidebarMenu = ({ items, pathname, Link, visible }) => {
    const isActive = (item) => (item.exact) ? pathname === item.path : pathname.startsWith(item.path);
    const activeItem = items.find((item) => isActive(item)) || {};
    return (<semantic_ui_react_1.Sidebar as={semantic_ui_react_1.Menu} animation="slide along" width="thin" visible={visible} icon="labeled" vertical inverted={activeItem.inverted}>
      {items.map((item) => {
        const active = isActive(item);
        return (<semantic_ui_react_1.Menu.Item as={Link} to={item.path} active={active} key={item.path}>
            <semantic_ui_react_1.Icon name={item.icon}/>
            {item.name}
          </semantic_ui_react_1.Menu.Item>);
    })}
    </semantic_ui_react_1.Sidebar>);
};
const mapStateToProps = (state) => ({
    visible: state.isSidebarVisible,
});
exports.default = react_redux_1.connect(mapStateToProps)(exports.SidebarMenu);
