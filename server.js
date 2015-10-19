var connect = require('connect');
var serveStatic = require('serve-static');
var __dirname = 'dist/';

connect().use(serveStatic(__dirname)).listen(8080);