'use strict';

module.exports = function(callback) {
  this.log = function(msg) {
    callback(msg);
  };
};
