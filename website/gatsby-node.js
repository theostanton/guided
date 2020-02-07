exports.onCreatePage = async ({ page, actions }) => {
  if (!page) {
    return
  }
  const { createPage } = actions

  switch (true) {
    case page.path.match(/^\/app/):
      page.matchPath = "/app/*"
      createPage(page)
      break
    case page.path.match(/^\/content/):
      page.matchPath = "/content/*"
      createPage(page)
      break
  }
}