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
require("../css/styles.css");
require("../css/responsive.css");
require("../css/semantic.min.css");
require("prismjs/themes/prism-okaidia.css");
const react_hooks_1 = require("@apollo/react-hooks");
const graphql_1 = require("../data/graphql");
const Layout = (props) => {
    return (React.createElement(react_hooks_1.ApolloProvider, { client: graphql_1.client },
        React.createElement("div", null, props.children)));
};
exports.default = Layout;
exports.withLayout = (WrappedComponent) => class WithLayout extends React.Component {
    render() {
        return (React.createElement(Layout, { location: this.props.location },
            React.createElement(WrappedComponent, Object.assign({}, this.props))));
    }
};
//# sourceMappingURL=Layout.js.map