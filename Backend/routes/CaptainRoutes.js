const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const CaptainController = require('../controllers/CaptainController');
const AuthMiddleware = require('../middewares/AuthMiddleware')

router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be atleast 3 characters long'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('vehicle.color').isLength({ min: 3 }).withMessage('Color must be atleast 3 characters long'),
    body('vehicle.plate').isLength({ min: 3 }).withMessage('Plate must be atleast 3 characters long'),
    body('vehicle.capacity').isInt({ min: 1 }).withMessage('Capacity must be atleast 1 character long'),
    body('vehicle.vehicleType').isIn(['car','motorcycle','auto']).withMessage("Invalid vehicle type")
],
    CaptainController.registerCaptain
)

router.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 6 }).withMessage("Password must be atleast 6 characters long")
],CaptainController.loginCaptain
)

router.get('/profile', AuthMiddleware.authCaptain, CaptainController.getCaptainProfile)

router.get('/logout', AuthMiddleware.authCaptain, CaptainController.logoutCaptain)


module.exports = router;
