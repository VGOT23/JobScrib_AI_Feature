const resumeModel = require('../models/resume.model')
const resumeService = require('../services/resume.services');

async function uploadResume(req,res) {
    const file = req.file
    const decoded = req.user;
    try {
        
        const response = await resumeService.uploadResumetoCld(file);
        console.log(response);
        const resume = await resumeModel.create({
            userId : decoded.id,
            fileUrl : response.url,
            originalFileName : response.name,
            fileType : response.fileType,
            fileSize : response.size
        })
        console.log(resume);
        return res.status(200).json({
            message : "Resume uploaded successfully",
            userId : resume.userId,
            fileUrl : resume.fileUrl
        })
    } catch (error) {
        console.log(error);
        return;
    }
}
module.exports = {uploadResume}