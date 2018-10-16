const nodemailer = require('nodemailer');
// import {GPASS} from '../../config.env';
require("env2")("./config.env");

const GPASS = process.env.GPASS;
const EMAIL = process.env.EMAIL


exports.post = (req, res) => {
 
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
  if(req.body.startSocialAction){
    
    
  }
  else if(req.body.eventProposal){
    const data = req.body.eventProposal;
  mailOpts = {
    from: data.name + ' &lt;' + data.email + '&gt;',
    to: `sangitasunuwar@gmail.com`,
    subject: 'New message from contact form at Start a social action at Brickworks app',
    text: `${req.body.name} (${req.body.email}) says: ${req.body.description}`
  }
    }
    else if(req.body.con)
  console.log('mailOpts',mailOpts);
  
  // smtpTrans.sendMail(mailOpts, function (error, response) {
  //   if (error) {
  //     console.log(error)
  //     res.send(error);
  //   }
  //   else {
  //     // res.render('contact-success');
  //     console.log(response)
  //     res.send(response);
  //   }
  // });
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