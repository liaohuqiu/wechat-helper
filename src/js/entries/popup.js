// load bootstrap
require(__bootstrap_sass__);
// load style
require(__style_dir__ + '/popup.scss');

import cube             from 'cube-js';
import log              from 'loglevel';
import jquery           from 'jquery'

import i18n             from 'chrome/i18n'
import ga               from 'ut/ga-agent';
import template         from 'wxhelper/template.js'

window.$ = jquery;
log.setLevel(__log_level__);

var App = function() {
};

cube.mix(App.prototype, {

  run: function() {

    var data = {
      i18n: i18n
    };

    var body = $(template.renderHtml('popup', data));
    $('body').append(body);

    ga('send', 'pageview','/popup');
    ga.auto();
  },
});

$(window).load(function(){
  var app = new App();
  app.run();
});
