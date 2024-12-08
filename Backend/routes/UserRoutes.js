const express = require('express');
const router = express.Router();
const { body } = require('express-validator')

const userController = require('../controllers/UserController')
const AuthMiddleware = require('../middewares/AuthMiddleware');

router.post('/register',[
    body('email').isEmail().withMessage('InvalidEmail'),
    body('fullname.firstname').isLength({min: 3}).withMessage('First name must be atleast 3 characters long'),
    body('password').isLength({min: 6}).withMessage('Password must be atleast 6 characters long')
],
    userController.registerUser
)

router.post('/login',
    [
        body('email').isEmail().withMessage('Invalid Email'),
        body('password').isLength({ min: 6 }).withMessage("Password length should be minimum of 6 characters")
    ],
    userController.loginUser
)

router.get('/profile', AuthMiddleware.authUser, userController.getUserProfile)

router.get('/logout', AuthMiddleware.authUser, userController.logOutUser)

module.exports= router;