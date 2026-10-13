import type { GatsbyBrowser } from 'gatsby'

export const onClientEntry: GatsbyBrowser['onClientEntry'] = () => {
  const fixTitleNamespace = () => {
    if (!document.head) return
    const titles = document.head.querySelectorAll('title')
    titles.forEach((title) => {
      if (title.namespaceURI === 'http://www.w3.org/2000/svg') {
        const htmlTitle = document.createElement('title')
        for (const attr of title.attributes) {
          htmlTitle.setAttribute(attr.name, attr.value)
        }
        htmlTitle.textContent = title.textContent
        title.parentNode?.replaceChild(htmlTitle, title)
      }
    })
  }

  const observer = new MutationObserver(fixTitleNamespace)
  fixTitleNamespace()
  observer.observe(document.head, {
    childList: true,
    subtree: true,
    characterData: true,
  })
}
