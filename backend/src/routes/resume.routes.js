const express = require('express')
const router = express.Router();
const resumeModel = require('../models/resume.model')
const resumeController = require('../controllers/resume.controller')
const resumeService = require('../services/resume.services')
const authMiddleware = require('../middlewares/auth.middleware')
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() })

router.post('/upload',authMiddleware.userAuth,upload.single("pdf"),resumeController.uploadResume);

module.exports = router;