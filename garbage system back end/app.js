const express = require('express');
const body_parser = require('body-parser');
const userRouter = require('./routes/user.routes');
const vehicalRouter = require('./routes/Location.routes');
const garbageRouter = require('./routes/garbage.routes');

const app = express();


app.use(body_parser.json());
app.use('/',userRouter);
app.use('/vehical', vehicalRouter)
app.use('/garbage', garbageRouter)

module.exports = app;
