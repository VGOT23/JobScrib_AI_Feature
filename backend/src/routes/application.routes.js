const express = require('express');
const router = express.Router();
const applicationController = require('../controllers/application.controller')
const authMiddleware = require('../middlewares/auth.middleware')
router.get('/',authMiddleware.userAuth,applicationController.getAllApplication);
router.post('/register',authMiddleware.userAuth,applicationController.registerApplication);
router.delete('/:id',applicationController.deleteApplication);
router.patch('/:id',applicationController.updateApplication);

module.exports = router;
