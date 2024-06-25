const bcrypt = require("bcryptjs");


//hash password
const hashPassword =  (plainText) => {
    const salt =  bcrypt.genSaltSync(10);

    const hashedPassword = bcrypt.hashSync(plainText, salt);

    return hashedPassword;
};

//verify password   
const verifyPassword = (userPassword, providedPassword) => {
return bcrypt.compareSync(providedPassword, userPassword);
}


//export the functions
module.exports = { hashPassword, verifyPassword};