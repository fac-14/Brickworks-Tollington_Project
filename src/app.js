var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
var bodyParser = require('body-parser');
var getData = require('./queryHandlers/getAllEvents')

//load express server
var app = express();
//telling router where to serve static files from e.g index.html
app.use(serveStatic(path.join(__dirname, '..', 'dist')));

//parsing files from frontend 
app.use(bodyParser.urlencoded({
    extended: true,
}))

app.use(bodyParser.json());

//post request handler (needs to require function from queryhandlers)
app.post('/api/create-event', (req, res) => {
    var eventData = Object.keys(req.body)[0];
    console.log(Object.keys(req.body)[0]);
})

//handles getData request to load events page (now requires getData function from getAllEvents)
app.get('/api/getAllEvents', (request,response) => {
    
    getData(request, response, cb);
});

//enables testing of 500 route
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
  

module.exports = app