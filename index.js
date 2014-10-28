'use strict';

// Object Oriented Logger
var Logger = require('./logger');
var consoleLogger = new Logger(console.log);
consoleLogger.log('hello object-oriented world');

// Functional Style Loggers
var curryLogger = require('./curry_logger');
var ccLogger = curryLogger(console.log);
var cc2Logger = curryLogger(function(msg) {
  console.log('foo ' + msg);
});
var cc3Logger = curryLogger(function(msg1, msg2){
  console.log('the first: ' + msg1);
  console.log('the second: '+ msg2);
});

ccLogger('hello functional world');
cc2Logger('hello world');
cc3Logger('hello world','curry and lager preffered');

