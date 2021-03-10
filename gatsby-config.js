module.exports = {
  siteMetadata: {
    title: "Niepubliczne Przedszkole Sióstr Służebniczek NMP NP"
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: `http://localhost:8080/`,
        // apiBase: `api`, // optional, defaults to `jsonapi`
      },
    },
    'gatsby-plugin-netlify-cms'
  ],
};
