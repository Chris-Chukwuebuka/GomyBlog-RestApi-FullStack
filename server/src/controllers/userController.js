const User = require("../models/userModel");
const { sendVerificationEmail } = require("../services/emailServices");
const {generateOTP} = require("../helpers/randomCodeGenerator");
const { hashPassword } = require("../helpers/passwordHelpers");

//import my userServices
const { findUserByEmail, findUserByToken, findUserById } = require("../services/userServices");




//create a new user instance
const createNewUser = async (req, res) => {
  try {
    //get the user data from the request body
    const { firstName, lastName, email } = req.body;

    const userExists = await findUserByEmail(email);

   

    if (userExists) {
        if (!userExists.isVerified) {
            //send a verification email to the user with the token for verification
            // await sendVerificationEmail(
            //   userExists.email,
            //   userExists.verificationToken
            // );
            return res
              .status(200)
              .json({ message: "Check your email to complete verification" });
          }
      return res
        .status(403)
        .json({ error: "User with this Email Already Exists" });
    }

    // executing the generate a random token function
    const verificationToken = generateOTP();

    //create a new user instance
    const user = new User({ firstName, lastName, email, verificationToken });
    //save the user to the database by using the save method from mongoose

    await user.save();
    //check if the user is created successfully
    if (!user) {
      return res.status(400).json({ error: "User Not Created!!" });
    }

    //send a verification email to the user
    await sendVerificationEmail(user.email, user.verificationToken);

    //send a response to the client if the user is created successfully
    return res.status(201).json({ message: "User Created Successfully" });

    //catch any error that occurs and send a response to the client
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const verifyUser = async (req, res) => {
  try {
    //get the verification token from the request body or request params  
    const { verificationToken } = req.body;

    const userWithTokenExists = await findUserByToken(verificationToken);


    if (!userWithTokenExists) {
      return res.status(404).json({ error: "Invalid Token" });

  }
userWithTokenExists.isVerified = true;

await userWithTokenExists.save();

return res.status(200).json({ message: "User Verified Successfully" });

}catch (error) {
  res.status(500).json({ error: "Internal Server Error" });
}

};

//create a new password
const createNewPassword = async (req, res) => {
  try {
    //get the user data from the request body

    const { verificationToken, password } = req.body;
    const user = await findUserByToken(verificationToken);


    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (!user.isVerified ) {
      return res.status(403).json({ error: "User Is not Verified" });
    }
  
//update the user password
const hashedPassword = hashPassword(password);
//set the new password to the user password
user.password = hashedPassword;
//set the verification token to undefined
user.verificationToken = undefined;
await user.save();
return res.status(200).json({ message: "Password Updated Successfully" });
  
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

//get the current user
const getCurrentUser = async (req, res) => {
  try {
    //get the user id from the request object
    const { userId } = req.user;

    //find the user by id
    const user = await findUserById(userId);

//check if the user exists
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    //send a response to the client if the user is found
    return res.status(200).json({message:"User Found", user });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}





module.exports = { createNewUser, verifyUser, createNewPassword, getCurrentUser };
