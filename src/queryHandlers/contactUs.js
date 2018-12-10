const nodemailer = require('nodemailer');
// import {GPASS} from '../../config.env';
require("env2")("./config.env");

const GPASS = process.env.GPASS;
const EMAIL = process.env.EMAIL


exports.post = (req, res) => {
 
  let mailOpts, smtpTrans;
  smtpTrans = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: EMAIL,
      pass: GPASS
    }
  });

  if(req.body.startSocialAction)
  {
  const formData = req.body.startSocialAction;
  formData.cntWithCommunityAdviser = (formData.cntWithCommunityAdviser)? 'Yes': 'No';
  formData.trainCommunityAdviser = (formData.trainCommunityAdviser)? 'Yes' : 'No'  
  mailOpts = {
    from: formData.name + ' &lt;' + formData.email + '&gt;',
    to: EMAIL,
    // `${result['color 5'] ? 'color 5 exists!' : 'color 5 does not exist!'}`
    subject: 'New message from contact form at Start a social action at Brickworks app',
    text: `name: ${formData.name} 
email: ${formData.email} 
description of social action: ${formData.description}
connect with a local Community Organiser:  ${formData.cntWithCommunityAdviser}
interested in Community Organisers training: ${formData.trainCommunityAdviser}`
  };
  console.log('mailOpts',mailOpts);  
}
    
  
  else if(req.body.eventProposal){
    const formData = req.body.eventProposal;
    formData.hireSpace = (formData.hireSpace)? 'Yes' : 'No';
    formData.listEvent = (formData.listEvent)? 'Yes' : 'No';
    console.log(req.body.eventProposal);
  mailOpts = {
    from: formData.name + ' &lt;' + formData.email + '&gt;',
    // to: EMAIL,
    to: EMAIL,
    subject: 'New message from contact form at promote/collaborate my social action at Brickworks app',
    // text: `${formData.name} (${formData.email}) says: ${formData.description}`
    text: `name: ${formData.name} 
email: ${formData.email} 
phone: ${formData.phone} 
event title: ${formData.eventTitle} 
of social action: ${formData.description}
date: ${formData.date} 
time: ${formData.time} 
venue: ${formData.venue} 
hire space: ${formData.hireSpace} 
list event: ${formData.listEvent} `
  }
    }
  


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
    console.log('mailOpts',mailOpts);
  }
 
  
