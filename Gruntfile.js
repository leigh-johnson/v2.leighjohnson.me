'use strict()';

var config= {
    port: 3000
};

module.exports = function(grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    var options = {
        config: {
            src: 'grunt/*.js'
        },
        pkg: grunt.file.readJSON('package.json')
    };

    var configs = require('load-grunt-configs')(grunt, options);
    // Project configuration.
    grunt.initConfig(configs);

    // load jshint
    grunt.registerTask('lint', [
        'jshint'
    ]);

    grunt.registerTask('dev', [
        'sass:dev',
        'browserify:compile',
        'jade:compile',
        'watch'
    ]);

    // default option to connect server
    grunt.registerTask('serve', [
        'jshint',
    ]);
};
