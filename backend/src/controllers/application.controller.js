const jobApplicationmodel = require("../models/jobapplication.model");
const mongoose = require("mongoose");
const resumeModel = require("../models/resume.model");

async function getAllApplication(req, res) {
  const user = req.user.id;
  const allJobapplication = await jobApplicationmodel.find({ user_id : user });
  return res.status(200).json({
    message: "all job application are feteched",
    JobApplications: allJobapplication,
    userId: user,
  });
}

async function registerApplication(req, res) {
  try {
    const user_id = req.user.id;
    const resumeId = await resumeModel.findOne({userId : user_id});
    if(!resumeId){
      return res.status(404).json({
        message : "user resume not uploaded"
      })
    }
    const {
      company,
      role,
      status,
      jobLink,
      platform,
      skillsRequired,
    } = req.body;
    const application = await jobApplicationmodel.create({
      user_id: user_id,
      company: company,
      role: role,
      status: status,
      jobLink: jobLink,
      platform: platform,
      skillsRequired: skillsRequired,
      resumeId: resumeId._id
    });
    return res.status(201).json({
      message: "Job application created",
      user_id: application.user_id,
      job_application_id: application._id,
    });
  } catch (error) {
    return res.status(401).json({
      error: error,
    });
  }
}

async function deleteApplication(req, res) {
  try {
    const application_id = req.params.id;
    const user_id = req.user.id;
    const deleteapplication = await jobApplicationmodel.findOneAndDelete({
      _id : application_id,
      user_id : user_id
    })
    if( !deleteapplication){
      return res.status(404).json({
        message : "Application Not Found"
      })
    }
    return res.status(200).json({
      message : "Job application deleted Successfully"
    })
  } catch (error) {
    return res.status(500).json({
      message : error.message
    })
  }
}

async function updateApplication(req, res) {}
module.exports = {
  getAllApplication,
  registerApplication,
  deleteApplication,
  updateApplication,
};
