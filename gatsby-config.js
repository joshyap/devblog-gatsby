/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'joshyap.dev',
    author: 'Josh Yap'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        // trackingId: 'UA-114503403-4',
        trackingId: 'UA-114503403-4',        
      },
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },    
    'gatsby-transformer-remark',
  ],
}
