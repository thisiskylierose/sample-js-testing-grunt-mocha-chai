'use strict';

module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  grunt.initConfig({
    connect: {
      server: {
        options: {
          hostname: 'localhost',
          port: 8001,
          base: [
            'tests',
            'node_modules'
          ],
          open: true,
          livereload: true
        }
      }
    },
    watch: {
      options: {
        livereload: true,
        interval: 5007 // https://github.com/gruntjs/grunt-contrib-watch/issues/35#issuecomment-18508836
      },
      html: {
        files: [
          'tests/{,*/}*.html',
          'tests/{,*/}*.js'
        ]
      }
    },
    mocha: {
      all: {
        src: ['tests/phantom.html'],
      },
      options: {
        run: true
      }
    }
  });

  grunt.registerTask('default', [
    'mocha'
  ]);

  grunt.registerTask('serve', [
    'connect',
    'watch'
  ]);
};
