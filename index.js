const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const loginRouter = require("./routes/login");
const passport = require('passport');
const { loginCheck } = require('./auth/passport');
const session = require('express-session');

dotenv.config();
loginCheck(passport);

// Mongo DB connection
const database = process.env.MONGODB_URI;
mongoose.connect(database, { useUnifiedTopology: true, useNewUrlParser: true, })
    .then(() => console.log("Database connection established"))
    .catch((err) => console.log(err));

const app = express();
const PORT = process.env.PORT || 3000;

//View Engine
app.set('view engine', 'ejs');

app.use(session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
    resave: true
}));

app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());

//Routes
app.use('/', loginRouter);

app.listen(PORT, console.log("Server is up on port: " + PORT));