'use strict';

var Logger = require('./logger');

var consoleLogger = new Logger(console.log);

consoleLogger.log('hello world');
