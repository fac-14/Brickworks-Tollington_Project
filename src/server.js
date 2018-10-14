var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
var bodyParser = require('body-parser');


var app = express();
app.use(serveStatic(path.join(__dirname, '..', 'dist')));

app.use(bodyParser.urlencoded({
    extended: true,
}))

app.use(bodyParser.json());
// app.get('/', (req, res) => {
//   res.send('hello world');
// })

// app.post('/api/create-event', (req, res) => {
//     var eventData = Object.keys(req.body)[0];
//     console.log(Object.keys(req.body)[0]);
// })

// app.get('/api/getAllEvents', getAllEvents.get);
// app.get('/api/getEventsByTheme', getEventsByTheme.get);

if(process.env.NODE_ENV === 'test'){
    app.get("/test500",(req, res, next) => {
        try {
            throw new Error("example error")
        } catch (e) {
            next(e)
        }
    });
}

//404 error express route
app.use((err,req,res,next)=>{
    res.status(404);
    res.render('404');
  });

  //500 error express route
  app.use((err,req,res,next)=>{
    res.status(500);
    res.render('500');
  });
  
var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started at port: ' + port);

module.exports = app;