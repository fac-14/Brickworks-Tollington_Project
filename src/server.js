var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');

var app = express();
app.use(serveStatic(path.join(__dirname, '..', 'dist')));

app.get('/api/test', (req, res) => {
  res.send('hello world');
})
// app.post('/api/createEvents', createEvents);

var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started at port: ' + port);