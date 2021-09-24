const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { sequelize } = require('./db/models');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const indexRouter = require('./routes/index');
const trainersRouter = require('./routes/trainers');
const pokemonRouter = require('./routes/pokemon');
const pokePagesRouter = require("./routes/pokepages")
const landing = require("./routes/landing");
const { restoreTrainer } = require('./auth')

const app = express();

// view engine setup
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

// set up session middleware
const store = new SequelizeStore({ db: sequelize });

app.use(
    session({
        name: 'pokesesh',
        secret: 'superSecret',
        store,
        saveUninitialized: false,
        resave: false,
        cookie: {
            maxAge: 3600000
        }
    })
);

// create Session table if it doesn't already exist
store.sync();

app.use(restoreTrainer);
app.use('/', indexRouter);
app.use('/landing', landing);
app.use('/trainers', trainersRouter);
app.use('/fusion-pokemon', pokemonRouter);
app.use('/pokepages', pokePagesRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});




module.exports = app;
