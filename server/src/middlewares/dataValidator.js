

const checkUserData = (req, res, next) => {
    const { email, firstName, lastName} = req.body;


    if (!email || !firstName || !lastName) {
        return res.status(403).json({ error: "All Input fields are required" });
    }
    //check if the email is valid
    if(!email.includes("@") || !email.includes(".")){
        return res.status(403).json({ error: "Invalid Email Address" });
    }
    //check if the first name is valid and not too long or too short
    if(firstName.length < 3 || firstName.length > 15){
        return res.status(403).json({ error: "First Name must be between 3 and 15 characters" });
    }

    //check if the last name is valid and not too long or too short
    if(lastName.length < 3 || lastName.length > 15){
        return res.status(403).json({ error: "Last Name must be between 3 and 15 characters" });
    }

    next();
};

//Password Validator
const checkPasswordsValidity = (req, res, next) => {

    const { password, confirmPassword} = req.body;

  //compare the password and confirm password  
if (!password || !confirmPassword) {
    return res.status(403).json({ error: "All Password Input fields are required" });
    
}

//check if the password and confirm password are the same
if (password !== confirmPassword) {
    return res.status(403).json({ error: "Passwords Does Not Match" });
}

//check if the password is not less than 8 characters
if (password.length < 8) {
    return res.status(403).json({ error: "Password must be at least 8 characters" });

}
next();

};
//export the functions
module.exports = { checkUserData, checkPasswordsValidity };