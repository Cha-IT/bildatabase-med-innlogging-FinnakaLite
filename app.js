const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const bcrypt = require('bcrypt');




const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const peopleRouter = require('./routes/people');
const carsRouter = require('./routes/cars');
const loginRouter = require('./routes/login');
const protectedRouter = require('./routes/protected');
const logoutRouter = require('./routes/logout');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(
    session({
        secret: "secrettestkey",
        resave: false,
        saveUninitialized: false,
        cookie: {secure:false}
    })
);

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/personer', peopleRouter);
app.use('/biler', carsRouter);
app.use('/login', loginRouter);
app.use('/protected', protectedRouter);
app.use('/logout', logoutRouter);

module.exports = app;
