const {findUserByEmail} = require('../services/userServices');
const {verifyPassword} = require('../helpers/passwordHelpers');
const {generateToken,verifyToken} = require('../helpers/jwtHelpers');
const {ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET} = require('../config/index');

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        //check if the user exists on the database
        const userExist = await findUserByEmail(email);
      

        if (!userExist) {
            return res.status(404).json({ error: "User With This Email Does not Exist" });
        }

//check if the user is verified
if (!userExist.isVerified) {
    return res.status(403).json({ error: "User Not Verified" });
}


//check if the password is correct
const passwordMatch = verifyPassword(userExist.password, password);

if (!passwordMatch) {
    return res.status(403).json({ error: "Invalid login credentials" });
}

//generate a refresh and access  token
const userData={userId:userExist._id, email:userExist.email};
const accessToken = generateToken(userData, "1h",ACCESS_TOKEN_SECRET);  
const refreshToken = generateToken(userData, "24h", REFRESH_TOKEN_SECRET);

//send back success response with the tokens
const  cookieOptions = {
    expires: new Date() +  60 * 60 * 1000,
    maxAge: 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "none",
    secure: true,
}
return res.cookie("accessToken", accessToken, cookieOptions).json({ message: "Login Successful", refreshToken });


    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

//logout user
const logoutUser = async (req, res) => {
    try {
        //clear the cookie
const cookieOptions = {
    httpOnly: true,
    sameSite: "none",
    secure: true,
}

//send back a response to the client
return res.clearCookie("accessToken", cookieOptions).json({ message: "Logged Out Successfully" });

    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};


const generateNewAccessToken =async (req, res) => {
try {
    //get auth headers from req.headers
    const headers= req.headers["authorization"];

    //check if refresh token is valid
    if (headers.split(" ")[0] !== "Bearer") {
        return res.status(403).json({ error: "Invalid Token" });
        
    }
    //get the refresh token from the headers
    const refreshToken = headers.split(" ")[1];

    //verify the refresh token
    const payload = verifyToken(refreshToken, REFRESH_TOKEN_SECRET);

    //generate a new access token
    const userData = { userId: payload.userId, email: payload.email };

    //generate a new access token
    const accessToken = generateToken(userData, "1h", ACCESS_TOKEN_SECRET);

    //send back the new access token to the client success
    //also save access token in the browser cookie storage for 1hr
    const cookieOptions = {
        expires: new Date() + 60 * 60 * 1000,
        maxAge: 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "none",
        secure: true,
    };

return res.cookie("accessToken", accessToken,cookieOptions).json({ message: "New Access Token Generated Successfully" });


} catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
}

}

module.exports = { loginUser, logoutUser, generateNewAccessToken };

//for cookie we have to download the cookie-parser package
//npm install cookie-parser