var fs = require('fs');
var path = require('path');
var Cube = require('cube-js');
string = require('sprintf-js');

function plugin(options) {
}

plugin.prototype.apply = function(compiler) {
  compiler.plugin('done', function() {
    const exec = require('child_process').exec;
    const cmd = "open http://reload.extensions";
    exec(cmd);
  });
};

module.exports = plugin;
