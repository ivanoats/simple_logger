'use strict';

module.exports = function(func) {
  return function() {
    func.apply(null,arguments);
  };
};
