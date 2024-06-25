const nodeMailer = require("nodemailer");
const { google } = require("googleapis");
const {CLIENT_ID, CLIENT_SECRET, ACCESS_TOKEN, REFRESH_TOKEN, USER_EMAIL} = require('../config/index.js');


const Oauth2 = google.auth.OAuth2;



const myOauth2Client = new Oauth2(
  CLIENT_ID,
  CLIENT_SECRET,
  "https://developers.google.com/oauthplayground"   
);

myOauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const transport = nodeMailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: USER_EMAIL,
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    refreshToken: REFRESH_TOKEN,
    accessToken: ACCESS_TOKEN,
  },
});

//export the transport object
module.exports = transport;