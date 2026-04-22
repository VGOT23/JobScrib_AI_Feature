const express = require('express')

const app = express();
const authroutes = require('../src/routes/auth.routes')
const cookieParser = require('cookie-parser')

app.use(express.json());
app.use(cookieParser());


// routes 
app.use('/api/auth',authroutes)

module.exports = app;