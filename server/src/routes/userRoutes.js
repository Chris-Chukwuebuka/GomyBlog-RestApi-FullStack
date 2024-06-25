const express = require('express');
const router = express.Router();
//import the user controller
const {createNewUser, verifyUser, createNewPassword, getCurrentUser} = require('../controllers/userController'); 
const { requireSignIn } = require('../middlewares/requireSignIn');

//import the data validation middleware

const {checkUserData, checkPasswordsValidity} = require('../middlewares/dataValidator');


//create a new user instance
router.post('/', checkUserData, createNewUser);
//verify a user
router.put('/verify', verifyUser);
//update a user password
router.put('/update-password',checkPasswordsValidity, createNewPassword);
//get the current user
router.get('/me', requireSignIn, getCurrentUser);

module.exports = router;
