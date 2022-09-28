module.exports = {
    siteMetadata: {
        siteUrl: "https://alishan.netlify.app",
        title: "Ali Shan",
        description: "Pakistan top content creator",
        author: "Khubair Ali",
        siteLanguage: "en",
        image: "banner.jpg",
        titleTemplate: "alishan",
        twitterUsername: "@khubairali",
        getform_url:
            " ",
        socials: [
            {
                id: 1,
                title: "instagram",
                path: "https://instagram.com/alishanofficial_",
                icon: "Instagram",
            }
        ],
        contact: {
            phone: "",
            email: "",
        },
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: "gatsby-plugin-sass",
            options: {
                useResolveUrlLoader: {
                    options: {
                        sourceMap: true, //default is false
                    },
                },
            },
        },
        "gatsby-plugin-image",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        "gatsby-transformer-json",
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images`,
                ignore: [`**/\.*`],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `data`,
                path: `${__dirname}/src/data`,
                ignore: [`**/\.*`],
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1200,
                        },
                    },
                    "gatsby-remark-reading-time",
                ],
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: "Inbio",
                short_name: "inbio",
                theme_color: "#ff014f",
                background_color: "#ffffff",
                display: "standalone",
                scope: "/",
                start_url: "/",
                icon: "src/assets/images/favicon.png",
            },
        },
    ],
};
