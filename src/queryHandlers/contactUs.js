const nodemailer = require('nodemailer');
require("env2")("./config.env");

const GPASS = process.env.GPASS;
const EMAIL = process.env.EMAIL


exports.post = (req, res) => {
  console.log('REQ VALUES ARE', req.body)
  let mailOpts, smtpTrans;
  smtpTrans = nodemailer.createTransport({
    // host: 'smtp.gmail.com',
    // port: 465,
    // secure: true,
    service: 'Gmail',
    auth: {
      user: EMAIL,
      pass: GPASS
    }
  });
  mailOpts = {
    from: req.body.name + ' &lt;' + req.body.email + '&gt;',
    // to: `sangitasunuwar@gmail.com`,
    to: EMAIL,
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
