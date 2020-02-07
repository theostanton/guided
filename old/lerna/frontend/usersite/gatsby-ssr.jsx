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
const server_1 = require("react-dom/server");
const store_1 = require("./src/store");
exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
    const ConnectedBody = () => (<react_redux_1.Provider store={store_1.store}>
      {bodyComponent}
    </react_redux_1.Provider>);
    replaceBodyHTMLString(server_1.renderToString(<ConnectedBody />));
};
//# sourceMappingURL=gatsby-ssr.jsx.map