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
      user: EMAIL,
      pass: GPASS
    }
  });
  if(req.body.startSocialAction)
  {
  const formData = req.body.startSocialAction;
  mailOpts = {
    from: formData.name + ' &lt;' + formData.email + '&gt;',
    // to: `sangitasunuwar@gmail.com`,
    to: EMAIL,
    // `${result['color 5'] ? 'color 5 exists!' : 'color 5 does not exist!'}`
    subject: 'New message from contact form at Start a social action at Brickworks app',
    text: `name: ${formData.name} 
           email: ${formData.email} 
           description of social action: ${formData.description}
           connect with a local Community Organiser:  ${formData.cntWithCommunityAdviser} ? 'yes': 'no'
           interested in Community Organisers training: ${formData.trainCommunityAdviser}
           `
    // text:`hello how are you`
  };
  console.log('mailOpts',mailOpts);
  
  
}
    
  
  else if(req.body.eventProposal){
    const data = req.body.eventProposal;
    console.log(req.body.eventProposal);
  mailOpts = {
    from: data.name + ' &lt;' + data.email + '&gt;',
    to: EMAIL,
    subject: 'New message from contact form at Start a social action at Brickworks app',
    text: `${data.name} (${data.email}) says: ${data.description}`
  }
    }
    else if(req.body.contactSupport) {

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
 
  
