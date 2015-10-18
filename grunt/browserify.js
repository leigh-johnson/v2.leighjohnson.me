module.exports = {
    compile:{
    src:['source/js/main.js'],
    dest: 'dist/js/bundle.js',
    options: {
          alias: {
            'bootstrap': './source/js/bootstrap.js'
        }
    }
    }
};