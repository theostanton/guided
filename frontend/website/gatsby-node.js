// exports.onCreatePage = async ({ page, actions }) => {
//   if (!page) {
//     return
//   }
//   const { createPage, deletePage } = actions
//
//   switch (page.path) {
//     case "/app/":
//       page.matchPath = "/app/*"
//       createPage(page)
//       break
//     case "/guide/":
//       page.matchPath = "/guide/:slug"
//       createPage(page)
//       break
//     case "/content/":
//       page.matchPath = "/content/*"
//       createPage(page)
//       break
//   }
// }

exports.onCreatePage = ({ page, actions }) => {
  console.log(page.path)
  if (page.path === `/app/`) {
    page.matchPath = `/app/*`
    actions.createPage(page)
  }
}