const nodemailer = require('nodemailer');
// import {GPASS} from '../../config.env';
require("env2")("./config.env");

let GPASS = process.env.GPASS;

exports.post = (req, res) => {
  console.log('REQ VALUES ARE', req.body)
  let mailOpts, smtpTrans;
  smtpTrans = nodemailer.createTransport({
    // host: 'smtp.gmail.com',
    // port: 465,
    // secure: true,
    service: 'Gmail',
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
    // text:`hello how are you`
  };
  console.log('mailOpts',mailOpts);
  
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
};
//////////////
// transporter.sendMail(mailOptions, function(error, info){
//   if(error){
//       console.log(error);
//       res.json({yo: 'error'});
//   }else{
//       console.log('Message sent: ' + info.response);
//       res.json({yo: info.response});
//   };
// });