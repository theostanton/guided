"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const redux_devtools_extension_1 = require("redux-devtools-extension");
exports.TOGGLE_SIDEBAR = "TOGGLE_SIDEBAR";
exports.toggleSidebar = () => ({ type: exports.TOGGLE_SIDEBAR });
exports.reducer = (state, action) => {
    switch (action.type) {
        case exports.TOGGLE_SIDEBAR:
            return Object.assign({}, state, { isSidebarVisible: !state.isSidebarVisible });
        default:
            return state;
    }
};
exports.initialState = { isSidebarVisible: false };
exports.store = redux_1.createStore(exports.reducer, exports.initialState, redux_devtools_extension_1.devToolsEnhancer({}));
//# sourceMappingURL=store.js.map