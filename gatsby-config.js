module.exports = {
  siteMetadata: {
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/master/themes/gatsby-theme-emilia-core/gatsby-config.js
    siteTitle: `The Old Book`,
    siteTitleAlt: `The Old Book | Vintage photos by Nhat Nguyen`,
    siteHeadline: `The Old Book | Vintage photos by Nhat Nguyen`,
    siteUrl: `https://the-old-book.netlify.app`,
    siteDescription: "Vintage photos by Nhat Nguyen",
    siteLanguage: `en`,
    author: `@torn4dom4n`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-emilia`,
      options: {
        name: `The old book`,
        socialMedia: [{}],
        location: `Vietnam`,
      },
    },
  ],
}
