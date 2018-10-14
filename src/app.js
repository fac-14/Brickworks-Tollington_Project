const express = require('express');
const router = require('./controllers/router');
var path = require('path');
var serveStatic = require('serve-static');
var bodyParser = require('body-parser');

const app = express();

app.use(serveStatic(path.join(__dirname, '..', 'dist')));

app.use(bodyParser.urlencoded({
    extended: true,
}))

app.use(bodyParser.json());






app.use(router);



module.exports = app;