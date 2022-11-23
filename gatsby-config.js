module.exports = {
  siteMetadata: {
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/master/themes/gatsby-theme-emilia-core/gatsby-config.js
    siteTitle: `The Old Book`,
    siteTitleAlt: `The Old Book | Vintage photos by Nhat Nguyen`,
    siteHeadline: `The Old Book | Vintage photos by Nhat Nguyen`,
    siteUrl: `https://the-old-book.netlify.app`,
    siteDescription: "Vintage photos by Nhat Nguyen",
    siteImage: `/banner.jpg`,
    author: `@retro90s`,
  },
  trailingSlash: `never`,
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-emilia`,
      options: {
        name: `The Old Book`,
        socialMedia: [{}],
        showThemeAuthor: false,
        location: `Vietnam`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `The Old Book | Vintage photos by Nhat Nguyen`,
        short_name: `The Old Book`,
        description: `Vintage photos by Nhat Nguyen`,
        start_url: `/`,
        background_color: `#fff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#3182ce`
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
  ].filter(Boolean),
}
