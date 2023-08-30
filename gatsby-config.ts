import type { GatsbyConfig, PluginRef } from 'gatsby'

const config: GatsbyConfig = {
  siteMetadata: {
    siteTitle: `The Old Book`,
    siteTitleAlt: `The Old Book | Welcome Home`,
    siteHeadline: `The Old Book | Welcome Home`,
    siteUrl: `https://the-old-book.netlify.app`,
    siteDescription: 'Welcome Home',
    siteImage: `/og-image.jpg`,
    siteLanguage: `en`,
  },
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
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `The Old Book | Welcome Home`,
        short_name: `The Old Book`,
        description: `Welcome Home`,
        start_url: `/`,
        background_color: `#fff`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-384x384.png`,
            sizes: `384x384`,
            type: `image/png`,
          },
        ],
      },
    },
  ].filter(Boolean) as Array<PluginRef>,
}

export default config
