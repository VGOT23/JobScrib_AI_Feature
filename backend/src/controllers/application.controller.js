const jobApplicationmodel = require('../models/jobapplication.model')
const mongoose = require('mongoose')
async function getAllApplication(req,res) {
    const user = req.user;
    const allJobapplication = await jobApplicationmodel.find({user})
    return res.status(200).json({
        message : "all job application are feteched",
        JobApplications : allJobapplication,
        userId : user
    })
}

async function registerApplication(req,res) {
    
}

async function deleteApplication(req,res) {
    
}

async function updateApplication(req,res) {
    
}
module.exports = {getAllApplication ,registerApplication , deleteApplication , updateApplication};