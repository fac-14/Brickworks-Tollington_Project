var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
var bodyParser = require('body-parser');

var getAllEvents = require('./queryHandlers/getAllEvents');

var app = express();
app.use(serveStatic(path.join(__dirname, '..', 'dist')));

app.use(bodyParser.urlencoded({
    extended: true,
}))

app.use(bodyParser.json());
// app.get('/', (req, res) => {
//   res.send('hello world');
// })

app.post('/api/create-event', (req, res) => {
    var eventData = Object.keys(req.body)[0];
    console.log(Object.keys(req.body)[0]);
})

app.get('/api/getAllEvents', getAllEvents.get);

var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started at port: ' + port);