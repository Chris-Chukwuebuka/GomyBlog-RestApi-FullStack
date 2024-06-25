const express = require('express');
const router = express.Router();
//IMPORT THE AUTH CONTROLLER
const {loginUser,logoutUser,generateNewAccessToken } = require('../controllers/authController');
const { requireSignIn } = require('../middlewares/requireSignIn');
const { REFRESH_TOKEN } = require('../config');

//LOGIN A USER
router.post('/login', loginUser);

//LOGOUT A USER
router.post('/logout',requireSignIn, logoutUser);

//refresh token for the user
router.get('/refresh-token', generateNewAccessToken);

module.exports = router;