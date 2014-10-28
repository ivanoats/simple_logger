'use strict';

module.exports = function(func) {
  return function(msg) {
    func.call(null, msg);
  };
};
