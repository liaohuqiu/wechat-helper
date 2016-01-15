// load bootstrap
require(__bootstrap_sass__);

import cube             from 'cube-js';
import log              from 'loglevel';
import jquery           from 'jquery'
import Q                from 'q';

import UI               from 'wxhelper/ui.js'
import ga               from 'ut/ga-agent.js';
import Controller       from 'wxhelper/controller.js'

window.$ = jquery;
log.setLevel(__log_level__);

var App = function() {
};

cube.mix(App.prototype, {

  run: function() {

    var controller = new Controller();
    var ui = new UI(controller);

    ui.renderThenShow();
    controller.start();

    ga('send', 'pageview','/wechat');
    ga.auto();
  },
});

var app = new App();
app.run();
