const express = require('express');
const router = express.Router();
const applicationController = require('../controllers/application.controller')
const {authUser} = require('../middlewares/auth.middleware')

router.get('/',authUser,applicationController.getAllApplication);
router.post('/register',applicationController.registerApplication);
router.delete('/:id',applicationController.deleteApplication);
router.patch('/:id',applicationController.updateApplication);

module.exports = router;
