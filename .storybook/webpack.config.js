// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

const path = require('path');

module.exports = {
  plugins: [
    // your custom plugins
  ],
  module: {
    rules: [
      // add your custom rules.
    ]
  },
  resolve: {
    alias: {
      Components: path.resolve(__dirname, '../src/components/'),
      Pages: path.resolve(__dirname, '../src/pages/'),
      Assets: path.resolve(__dirname, '../src/assets/'),
      Services: path.resolve(__dirname, '../src/services/'),
      Store: path.resolve(__dirname, '../src/store/'),
      Root: path.resolve(__dirname, '../src/')
    }
  }
};
