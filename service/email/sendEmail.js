const sgMail = require('@sendgrid/mail');
const path = require('path');
require("dotenv").config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (email, verificationLink) => {
  const html = path.join(__dirname, '..', 'views', 'emails', 'verificationEmail.html');

    const msg = {
        to: email,
        from: 'bibakristina0307@gmail.com',
        subject: 'Welcome to Contacts API! Confirm your new email.',
        text: `Hey there! You recently register the email address associated with your Contacts API account. To confirm your email, please click on the button or link below. ${verificationLink}`,
        html,
      };
      
      sgMail
        .send(msg)
        .then(() => {
          console.log('Email sent');
        })
        .catch(error => {
          console.error(error);
        });
}
module.exports = sendEmail;