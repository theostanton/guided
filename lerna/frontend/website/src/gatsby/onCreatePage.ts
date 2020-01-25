import {GatsbyNode} from "gatsby";

export const onCreatePage: GatsbyNode["onCreatePage"] = async ({page, actions}) => {
    const {createPage} = actions;
    if ((page.path as string).match(/^\/guide/)) {
        createPage({
            matchPath: "/guide/*",
            component: page.component as string,
            context: page.context,
            path: page.path as string
        })
    }
};