const {verifyToken} = require('../helpers/jwtHelpers');
const {ACCESS_TOKEN_SECRET}= require('../config/index');

const requireSignIn = (req, res, next) => {
   try {

    //destructuring the accessToken from the req.cookies object
    const {accessToken} = req.cookies;

    //if there is no accessToken, return an error
    if (!accessToken) {
        return res.status(401).json({error: "Access denied"})
    }

    //verify the Token with the verifyToken helpers function using the accessToken service
    const payload = verifyToken(accessToken, ACCESS_TOKEN_SECRET);  // verifyToken function from jwtHelpers.js

    //if payload is not returned  from the verifyToken function return error 403
    if (!payload) {
        res.status(403).json({error: 'Access denied'});
    }
    req.user = payload;

    //call the next function to move forward
    next();
    
   } catch (error) {
    //handle any error returned from the jwt verify method
        return res.status(403).json({error: 'Invalid or expired token'});
   }
};

module.exports = {requireSignIn}