const express = require('express')

const app = express();
const authroutes = require('../src/routes/auth.routes')
const applicationRoutes = require('../src/routes/application.routes')
const cookieParser = require('cookie-parser')

app.use(express.json());
app.use(cookieParser());


// routes 
app.use('/api/auth',authroutes)
app.use('/api/application',applicationRoutes)


module.exports = app;