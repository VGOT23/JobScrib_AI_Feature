const express = require('express')

const app = express();
const authroutes = require('../src/routes/auth.routes')
const applicationRoutes = require('../src/routes/application.routes')
const resumeRoutes = require('./routes/resume.routes')
const cookieParser = require('cookie-parser')

// middlewares
app.use(express.json());
app.use(cookieParser());


// routes 
app.use('/api/auth',authroutes)
app.use('/api/application',applicationRoutes)
app.use('/api/resume',resumeRoutes)


module.exports = app;