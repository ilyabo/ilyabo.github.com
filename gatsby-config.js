const colors = require('./colors')

module.exports = {
  siteMetadata: {
    title: 'Ilya Boyandin',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Ilya Boyandin',
        short_name: 'Ilya Boyandin',
        start_url: '/',
        background_color: '#fff',
        theme_color: colors.primary,
        display: 'minimal-ui',
        // icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-emotion',
  ],
}
