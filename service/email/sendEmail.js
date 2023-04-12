// const sgMail = require('@sendgrid/mail');
const path = require('path');
// require("dotenv").config();
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// const sendEmail = async (email, verificationLink) => {
//   const html = path.join(__dirname, '..', 'views', 'emails', 'verificationEmail.html');

//     const msg = {
//         to: email,
//         from: 'bibakristina0307@gmail.com',
//         subject: 'Welcome to Contacts API! Confirm your new email.',
//         text: `Hey there! You recently register the email address associated with your Contacts API account. To confirm your email, please click on the button or link below. ${verificationLink}`,
//         html,
//       };
      
//       sgMail
//         .send(msg)
//         .then(() => {
//           console.log('Email sent');
//         })
//         .catch(error => {
//           console.error(error);
//         });
// }
const nodemailer = require('nodemailer');

require('dotenv').config();

const config = {
  host: 'smtp.meta.ua',
  port: 465,
  secure: true,
  auth: {
    user: process.env.BASE_EMAIL,
    pass: process.env.PASSWORD,
  },
};
const sendEmail = async (email, verificationToken) => {

  const verificationLink = `${process.env.SERVER_URL}api/users/verify/${verificationToken}`;

  const transporter = nodemailer.createTransport(config);
  const emailOptions = {
    from: process.env.BASE_EMAIL,
    to: email,
    subject: 'Welcome to Contacts API! Confirm your new email.',
    text: `Hey there! You recently register the email address associated with your Contacts API account. To confirm your email, please click on the button or link below. ${verificationLink}`,
  };
  
  transporter
    .sendMail(emailOptions)
    .then(info => console.log(info))
    .catch(err => console.log(err));}


  module.exports = sendEmail;
