module.exports = {
  siteMetadata: {
    title: `Barnes Nursery - Huron, Ohio`,
    author: {
      name: `Barnes Nursery`,
      summary: `A family owned company offering comprehensive horticulture services`,
    },
    description: `Barnes Nursery Inc. is a fantastic, family-owned, company that offers a comprehensive range of horticultural services.`,
    siteUrl: `https://www.barnesnursery.com/`,
    social: {
      facebook: `barnesnursery`,
      instagram: `barnes_nursery`,
      twitter: `barnesnursery`,
    },
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -93,
        duration: 1000
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("node-sass"),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/hours`,
        name: `hours`,
      },
    },
    {
      resolve: `gatsby-plugin-recaptcha`,
      options: {
         async: true,
         defer: true,
         args: `?onload=onloadCallback&render=explicit`,
      },
   },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Barnes Nursery`,
        short_name: `Barnes`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/barnes-icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-remove-serviceworker',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
