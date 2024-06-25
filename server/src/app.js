const express = require('express');
const cors = require('cors');
const app = express();
const sanitizer = require('perfect-express-sanitizer');
const cookieParser = require('cookie-parser');
//import the user and blog routes
const userRoutes = require('./routes/userRoutes');
const blogRoutes = require('./routes/blogRoutes');
const authRoutes = require('./routes/authRoutes');

//global middleware configuration for json data
app.use(express.json());

//global middleware configuration for cookie parser
app.use(cookieParser());

//global middleware configuration for cors
app.use (cors());

//global middleware configuration for sanitizer user input 
app.use(sanitizer.clean({
    xss: true,
    noSql: true,
    sql: true,
})
);
//use the user and blog routes
app.use('/users', userRoutes);
app.use('/blogs', blogRoutes);
app.use('/auth', authRoutes);   //use the auth routes


//create a default route
app.get('/', (req, res) => {
    res.send('Hello Server Is Live');
    });



    module.exports = app;
