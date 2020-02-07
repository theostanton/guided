"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mobx_react_1 = require("mobx-react");
const React = __importStar(require("react"));
const Store_1 = require("./src/stores/Store");
exports.default = ({ element }) => (<mobx_react_1.Provider store={Store_1.Store}>{element}</mobx_react_1.Provider>);
//# sourceMappingURL=wrap-with-provider.jsx.map