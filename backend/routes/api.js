const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middleware/auth');

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.get('/users', auth, userController.getAllUsers);
router.delete('/users/:id', auth, userController.deleteUser);

module.exports = router;
