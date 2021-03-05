const mailgun = require('mailgun-js')
//var API_KEY = 'YOUR_API_KEY';
var DOMAIN = 'sandboxbf85762bcd604ccf880e53f23db686c8.mailgun.org';


var mg =mailgun({apiKey: process.env.API_KEY, domain: DOMAIN});
//const data = {
//   from: 'Mailgun Sandbox <postmaster@sandboxbf85762bcd604ccf880e53f23db686c8.mailgun.org>',
//   to: 'mailgun created emailid'
//   subject: 'Hello',
//   text: 'Testing some Mailgun awesomeness!'
// };

// mg.messages().send(data, (error, body) => {
//   console.log(body);
// });

const sendWelcomeEmail = (email,name)=>{
  mg.messages().send({
    to: email,
    from: 'Mailgun Sandbox <postmaster@sandboxbf85762bcd604ccf880e53f23db686c8.mailgun.org>',
    subject: 'thanks for joining in!',
    text: `welcome to the app, ${name}. Let me know ho you get along with the app.`
  })
}

const sendCancelEmail = (email,name)=>{
  mg.messages().send({
    to:email,
    from: 'Mailgun Sandbox <postmaster@sandboxbf85762bcd604ccf880e53f23db686c8.mailgun.org>',
    subject: 'Sorry for inconvience',
    text: `sorry why mr ${name} delete your account.`

  })
}
module.exports={
  sendWelcomeEmail,
  sendCancelEmail
}