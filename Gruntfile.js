'use strict';
module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.initConfig({
    jshint: {
      all: ['Gruntfile.js','index.js','curry_logger.js','logger.js'],
      options: {
        jshintrc: true
      }
    }
  });

  grunt.registerTask('default','jshint');
};
