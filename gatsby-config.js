module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "squidquiz",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-load-script",
      options: {
        src: "https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js",
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.svg/,
        },
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Bebas Neue"],
        },
      },
    },
  ],
};
