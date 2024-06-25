 
const { USER_EMAIL } = require("../config/index");
const transport = require("../helpers/smtpTransport");


const sendVerificationEmail = async (email, token) => {

  //create the email content
  const mailOptions = {
    to: email,
    from: USER_EMAIL,
    subject: "Welcome to MindMingle",
    html: `<div><p>Dear<strong>Valid User</strong></p>
<h4>You are a step away from joining MindMingle</h4>
<p>Use the token below to verify your account </p>
<h1>${token}</h1>
<p>Thank you for choosing MindMingle</p></div>`,
  };

  //send the email

 transport.sendMail(mailOptions).then(()=>{
  message: "Email sent successfully";

 })
.catch(()=>{
  error:"something went wrong ";
})
};
module.exports = { sendVerificationEmail };

// @description This is a simple example of how to use the nodemailer package to send an email. The nodemailer package is a module that allows you to send emails from your Node.js application. In this example, we create a function that takes an email address and a token as arguments and sends a verification email to the user. We use the smtpTransport module to create a transport object that sends the email using the Gmail SMTP server. We then create an email object with the email content and send the email using the sendMail method of the transport object. If the email is sent successfully, we return a success message. If an error occurs, we return an error message. Finally, we export the function so that it can be used in other parts of the application.
