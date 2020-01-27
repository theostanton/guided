exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  if (page.path.match(/^\/app/)) {
    page.matchPath = "/app/*"
    createPage(page)
    return
  }
  if (page.path.match(/^\/content/)) {
    page.matchPath = "/*"
    createPage(page)
    return
  }
}