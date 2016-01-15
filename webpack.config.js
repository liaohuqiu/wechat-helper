var path = require('path');

var module_path = path.resolve(__dirname, 'node_modules');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var root_dir = __dirname;
var cube = require('cube-js');

var config = require('./config.js');

var name_for_img = '/img/[hash].[ext]';
var font_version = cube.formatDate(new Date(), 'yyyyMMddhhmmss');
var name_for_font = 'name=/fonts/[name].[ext]?v=' + font_version;

var css_loader = 'css-loader?sourceMap!less-loader?sourceMap!sass-loader?sourceMap&outputStyle=expanded';

var env = process.env.NODE_ENV;
var target = process.env.target;

var loaders = [
  {
  test: /\.js$/,
  exclude: module_path,
  loader: 'babel'
},
{
  test: /.*\.(gif|png|jpe?g)$/i,
  loader: 'url?limit=10000&name=' + name_for_img
},
{
  test: /bootstrap-sass\/assets\/javascripts\//,
    loader: 'imports?jQuery=jquery',
},
{
  test: /bootstrap\/js\//,
    loader: 'imports?jQuery=jquery'
},
{
  test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
  loader: 'url?limit=100000&mimetype=application/font-woff&' + name_for_font,
},
{
  test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
  loader: 'url?limit=100000&mimetype=application/octet-stream&' + name_for_font,
},
{
  test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
  loader: 'url?limit=10000&mimetype=image/svg+xml&' + name_for_font,
},
{
  test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
  loader: 'file?' + name_for_font,
}];

var plugins = [
  new webpack.ProvidePlugin({
  $: 'jquery',
  jQuery: 'jquery',
}),
new webpack.DefinePlugin(config.getDefineVar()),
];

if (config.shouldExtractCss()) {
  var css_filename = config.getCssFileName();
  plugins.push(new ExtractTextPlugin('css/' + css_filename, { allChunks: true }));
  loaders.push({
    test: /\.(css|less|scss)$/,
    loader: ExtractTextPlugin.extract('style-loader', css_loader)
  });
} else {
  loaders.push({
    test: /\.(css|less|scss)$/,
    loader: css_loader,
  });
}

var entry = {};
if (target == 'popup') {
  entry = {
    popup: './src/js/entries/popup.js',
  }
} else {
  entry = {
    app: './src/js/entries/app.js',
    background: './src/js/entries/background.js',
  }
}

var data = {
  entry: entry,
  output: {
    path: path.join(root_dir, '/extension/dist'),
    filename: 'js/[name].js',
    publicPath: '/dist'
  },
  node: {
    fs: 'empty',
  },
  module: {
    loaders: loaders,
  },
  plugins: plugins
};

if (env == 'dev') {
  data['devtool'] = 'source-map';
}

module.exports = data;
