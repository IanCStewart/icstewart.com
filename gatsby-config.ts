import type { GatsbyConfig } from 'gatsby';
import siteConfig from './config';

const autoprefixer = require('autoprefixer');

const config: GatsbyConfig = {
  siteMetadata: {
    url: siteConfig.url,
    siteUrl: siteConfig.url,
    title: siteConfig.title,
    titleTemplate: siteConfig.titleTemplate,
    subtitle: siteConfig.subtitle,
    description: siteConfig.subtitle,
    copyright: siteConfig.copyright,
    menu: siteConfig.menu,
    author: siteConfig.author,
    previewImage: siteConfig.previewImage,
    banner: siteConfig.previewImage,
    image: siteConfig.previewImage,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [
          autoprefixer(),
        ],
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: siteConfig.title,
        short_name: siteConfig.title,
        start_url: '/',
        // background_color: '#FFF',
        // theme_color: '#164BC5',
        display: 'standalone',
        icons: [
          {
            src: '/icon_192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icon_512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        stages: ['develop'],
        extensions: ['js', 'jsx'],
        exclude: ['node_modules', '.cache', 'public'],
      },
    },
  ],
  graphqlTypegen: true,
};

export default config;
