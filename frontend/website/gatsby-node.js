exports.onCreatePage = async ({ page, actions }) => {
  if (!page) {
    return
  }
  const { createPage } = actions

  switch (page.path) {
    case "/app/":
      page.matchPath = "/app/*"
      createPage(page)
      break
    case "/content/":
      page.matchPath = "/content/*"
      createPage(page)
      break
  }
}