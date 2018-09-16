module.exports = {
  siteMetadata: {
    title: 'Ilya Boyandin\'s Home Page',
    author: 'Ilya Boyandin',
    description: 'Home page of Ilya Boyandin, a data visualization engineer.',
    siteUrl: 'https://ilya.boyandin.me/',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 850,
              wrapperStyle: `
                margin: 20px 0;
                padding: 10px;
                border: 1px solid #eef;
                border-radius: 5;
                box-shadow: 0px 0px 5px #ccc;
              `,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-1346622-5`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ilya Boyandin's Home Page`,
        short_name: `Ilya Boyandin`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#055385`,
        display: `minimal-ui`,
        // icon: `src/assets/gatsby-icon.png`,
      },
    },
    // `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    'gatsby-plugin-emotion',
  ],
}
