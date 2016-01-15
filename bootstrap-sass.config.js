var config = require('./config.js');
var dir = './src/style/';

var data = {
  // Use preBootstrapCustomizations to change $brand-primary. Ensure this preBootstrapCustomizations does not
  // depend on other bootstrap variables.
  preBootstrapCustomizations: dir + "_pre-bootstrap-customizations.scss",

  // Use bootstrapCustomizations to utilize other sass variables defined in preBootstrapCustomizations or the
  // _variables.scss file. This is useful to set one customization value based on another value.
  bootstrapCustomizations: dir + "_bootstrap-customizations.scss",

  // mainSass: "./_main.scss",
  verbose: true,
  debug: false,
  // Default for the style loading is to put in your js files
  // styleLoader: "style-loader!css-loader!sass-loader";

  // If you want to use the ExtractTextPlugin
  //   and you want compressed
  //     styleLoader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader"),
  //   or if you want expanded CSS
  //     styleLoader: ExtractTextPlugin.extract("style-loader", "css-loader!sass?outputStyle=expanded"),

  // ### Scripts
  // Any scripts here set to false will never
  // make it to the client, it's not packaged
  // by webpack.
  scripts: {
    /*
    'transition': true,
    'alert': true,
    'button': true,
    'carousel': true,
    'collapse': true,
    'dropdown': true,
    'modal': true,
    'tooltip': true,
    'popover': true,
    'scrollspy': true,
    'tab': true,
    'affix': true
    */
  },
  // ### Styles
  // Enable or disable certain less components and thus remove
  // the css for them from the build.
  styles: config.getBootstrapConfig(),
    /*
    "mixins": true,
    "normalize": true,

    "print": true,
    "glyphicons": true,

    "scaffolding": true,
    "type": true,
    "code": true,
    "grid": true,
    "tables": true,
    "forms": true,
    "buttons": true,

    "component-animations": true,
    "dropdowns": true,
    "button-groups": true,
    "input-groups": true,
    "navs": true,
    "navbar": true,
    "breadcrumbs": true,
    "pagination": true,
    "pager": true,
    "labels": true,
    "badges": true,
    "jumbotron": true,
    "thumbnails": true,
    "alerts": true,
    "progress-bars": true,
    "media": true,
    "list-group": true,
    "panels": true,
    "wells": true,
    "responsive-embed": true,
    "close": true,

    "modals": true,
    "tooltip": true,
    "popovers": true,
    "carousel": true,

    "utilities": true,
    "responsive-utilities": true
    */
};

if (config.shouldExtractCss()) {
  var ExtractTextPlugin = require("extract-text-webpack-plugin");
  data['styleLoader'] = ExtractTextPlugin.extract("style-loader", "css-loader!sass?outputStyle=expanded");
}

module.exports = data;
