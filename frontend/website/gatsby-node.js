exports.onCreatePage = ({ page, actions }) => {
  if (page.path === `/`) {
    page.matchPath = `/*`
    actions.createPage(page)
  }
}