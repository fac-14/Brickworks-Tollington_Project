const app = require('./app')

var getAllEvents = require('./queryHandlers/getAllEvents');
var getEventsByTheme = require('./queryHandlers/getEventsByTheme');
var contactUs = require('./queryHandlers/contactUs');

var app = express();
app.use(serveStatic(path.join(__dirname, '..', 'dist')));

app.use(bodyParser.urlencoded({
  extended: true,
}))

app.use(bodyParser.json());


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
  console.log('REQ VALUES ARE', req.body)
  const smtpTrans = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: `sangitasunuwar@gmail.com`,
      pass: GPASS
    }
  });
  const mailOpts = {
    from: `sangitasunuwar@gmail.com`,
    to: `sangitasunuwar@gmail.com`,
    subject: 'New message from contact form at Start a social action at Brickworks app',
    text: `${req.body.name} (${req.body.email}) says: ${req.body.description}`
    // text: `hello how are you today`
  };
  console.log('mailOpts', mailOpts);

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
// all requests which begin with /api will go through to apiRoutes
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
