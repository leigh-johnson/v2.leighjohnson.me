module.exports = {
    js: {
        files: [
            'source/js/**/*.js',],
        tasks: ['jshint:all',
                'browserify'
        ],
        options: {
            livereload: 1337
        }
    },
    browserify:{
        files:['public/js/partials/**/*.js'],
        tasks:['browserify'],
        options: {
            livereload: 1337
        }
    },
    sass: {
        files: ['source/styles/**/*.scss'],
        tasks: ['sass'],
        options: {
            livereload: 1337
        }
    },
    jade: {
        files: ['templates/**/*.jade'],
        tasks: ['jade'],
        options: {
            livereload: 1337
        }
    }
};