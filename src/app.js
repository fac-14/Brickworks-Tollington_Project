const express = require('express');

var path = require('path');

var bodyParser = require('body-parser');

const app = express();
var getAllEventsAirTable = require('./queryHandlers/getAllEventsAirTable');
var contactUs = require('./queryHandlers/contactUs');


app.use(bodyParser.urlencoded({
    extended: true,
}))

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '..', 'dist')));

app.get('/api/getAllEventsAirTable', getAllEventsAirTable.get);

// POST route from contact form
app.post('/api/contactUs', contactUs.post);
app.post('/api/event-proposal', contactUs.post);
if(process.env.NODE_ENV === 'test'){
    app.get("/test500",(req, res, next) => {
        try {
            throw new Error("example error")
        } catch (e) {
            next(e)
        }
    });
}
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
   });
// router.use((err,req,res,next)=>{
//     res.status(404);
//     res.render('404');
//   });
  //500 error express route
  app.use((err,req,res,next)=>{
    res.status(500);
    res.render('500');
  });
module.exports = app;