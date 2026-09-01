const express = require('express');
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

// Public routes
router.post('/register', authController.register);
router.post('/login', authController.login);

// Protected routes
router.get('/profile', authMiddleware.authenticate, authController.getProfile);
router.put('/preferences', authMiddleware.authenticate, authController.updatePreferences);
router.put('/stats', authMiddleware.authenticate, authController.updateStats);

module.exports = router;
