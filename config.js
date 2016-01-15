var cube = require('cube-js');
var env = process.env.env || 'prod';
var is_dev = env == 'dev';
var target = process.env.target;

var path = require('path');

var root_dir = __dirname;
var template_dir = path.join(root_dir, 'src/templates');
var style_dir = path.join(root_dir, 'src/style');
var swig = require('swig');

var i18n_default_file = path.join(root_dir, '/extension/_locales/en/messages.json');
var bootstrap_sass = 'bootstrap-sass!' + root_dir + '/bootstrap-sass.config.js';

// trace, debug, info, warn, error
var loglevel = process.env.loglevel || 'error';
if (is_dev) {
  loglevel = 'trace';
}

var config = {

  getDefineVar: function() {
    var data = {

      __env__: JSON.stringify(env),
      __is_dev__: is_dev,
      __log_level__: JSON.stringify(loglevel),

      __style_dir__: JSON.stringify(style_dir),
      __template_dir__: JSON.stringify(template_dir),

      __bootstrap_sass__: JSON.stringify(bootstrap_sass),
      __i18n_default_file__: JSON.stringify(i18n_default_file),

      __ga_tracking_code__: JSON.stringify('UA-43024238-11'),
    }
    return data;
  },

  shouldExtractCss: function() {
    if (env != 'dev' || target == 'popup') {
      return true;
    }
    return false;
  },

  getBootstrapConfig() {
    if (target == 'popup') {
      return {
        mixins: true,
        normalize: true,
        // glyphicons: true,
        // utilities: true,
        // alerts: true,
        buttons: true,
      };
    } else {
      return {
        glyphicons: true,
      };
    }
  },

  getCssFileName: function() {
    var css_filename = 'app.css';
    if (target == 'popup') {
      css_filename = 'popup.css';
    }
    return css_filename;
  }

};

module.exports = config;
