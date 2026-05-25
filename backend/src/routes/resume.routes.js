const express = require('express')
const router = express.Router();
const resumeModel = require('../models/resume.model')
const resumeController = require('../controllers/resume.controller')
const authMiddleware = require('../middlewares/auth.middleware')
router.post('/upload',authMiddleware.userAuth,resumeController.uploadResume);

module.exports = router;