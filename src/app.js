const express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var getAllEventsAirTable = require('./queryHandlers/getAllEventsAirTable');
var contactUs = require('./queryHandlers/contactUs');
var getPastEventsAirTable = require('./queryHandlers/getPastEventsAirTable');
var queryARecord = require('./queryHandlers/queryARecord');
const app = express();


app.use(bodyParser.urlencoded({
    extended: false,
}))

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '..', 'dist')));

// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(__dirname, ' ')))
// }

app.get('/api/getAllEventsAirTable', getAllEventsAirTable.get);
app.get('/api/getPastEventsAirTable', getPastEventsAirTable.get);
app.post('/api/queryARecord', (req, res)=> {
    // console.log(Object.keys(req.body)[0])
    queryARecord('social_action_events', JSON.parse(Object.keys(req.body)[0]))
    // .then(result => result.fields.json())
        
        .then((data)=> {
            console.log(data)
            res.send(data)
        })
        
        .catch((err)=> {
            console.log('erroooor',{err})
        });
})
// POST route from contact form
app.post('/api/contactUs', contactUs.post);
app.post('/api/event-proposal', contactUs.post);
if (process.env.NODE_ENV === 'test') {
    app.get("/test500", (req, res, next) => {
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
app.use((err, req, res, next) => {
    res.status(500);
    res.render('500');
});
module.exports = app;