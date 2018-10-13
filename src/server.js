var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
var bodyParser = require('body-parser');

var getAllEvents = require('./queryHandlers/getAllEvents');
var getEventsByTheme = require('./queryHandlers/getEventsByTheme');
var contactUs = require('./queryHandlers/contactUs');

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
app.get('/api/getEventsByTheme', getEventsByTheme.get);

// POST route from contact form
// app.post('/api/contactUs', contactUs.post);
const nodemailer = require('nodemailer');
require("env2")("./config.env");

let GPASS = process.env.GPASS;
app.post('/api/contactUs', (req, res) => {
    console.log('REQ VALUES ARE', req)
    let mailOpts, smtpTrans;
    smtpTrans = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: `sangitasunuwar@gmail.com`,
        pass: GPASS
      }
    });
    mailOpts = {
      from: req.body.name + ' &lt;' + req.body.email + '&gt;',
      to: `sangitasunuwar@gmail.com`,
      subject: 'New message from contact form at Start a social action at Brickworks app',
      text: `${req.body.name} (${req.body.email}) says: ${req.body.description}`
    };
    smtpTrans.sendMail(mailOpts, function (error, response) {
      if (error) {
        console.log(error)
        res.send(error);
      }
      else {
        // res.render('contact-success');
        console.log(response)
        res.send(response);
      }
    });
  }
)

var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started at port: ' + port);