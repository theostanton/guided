"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onCreatePage = async ({ page, actions }) => {
    const { createPage } = actions;
    if (page.path.match(/^\/guide/)) {
        createPage({
            matchPath: "/guide/*",
            component: page.component,
            context: page.context,
            path: page.path
        });
    }
};
