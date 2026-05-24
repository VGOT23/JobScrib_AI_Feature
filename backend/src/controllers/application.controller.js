const jobApplicationmodel = require("../models/jobapplication.model");
const mongoose = require("mongoose");

async function getAllApplication(req, res) {
  const user = req.user;
  const allJobapplication = await jobApplicationmodel.find({ user });
  return res.status(200).json({
    message: "all job application are feteched",
    JobApplications: allJobapplication,
    userId: user,
  });
}

async function registerApplication(req, res) {
  try {
    const user_id = req.user;
    const {
      company,
      role,
      status,
      jobLink,
      platform,
      skillsRequired,
      resumeId,
      notes,
    } = req.body;
    const application = await jobApplicationmodel.create({
      user_id: user_id,
      company: company,
      role: role,
      status: status,
      jobLink: jobLink,
      platform: platform,
      skillsRequired: skillsRequired,
      resumeId: resumeId,
      notes: notes,
    });
    return res.status(201).json({
      message: "Job application created",
      user_id: user_id,
      job_application_id: application._id,
    });
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      error: error,
    });
  }
}

async function deleteApplication(req, res) {}

async function updateApplication(req, res) {}
module.exports = {
  getAllApplication,
  registerApplication,
  deleteApplication,
  updateApplication,
};
