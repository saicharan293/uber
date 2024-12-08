const UserModel = require('../models/UserModel');
const UserService = require('../services/UserServices')
const { validationResult } =require('express-validator')
const BlackListTokenModel = require('../models/BlackListTokenModel');

module.exports.registerUser = async(req,res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    const {fullname, email, password} = req.body;

    const hashedPassword = await UserModel.hashPassword(password);

    const user = await UserService.createUser({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword
    });

    const token = user.generateAuthToken();
    res.status(201).json({token, user})
}

module.exports.loginUser = async(req,res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email }).select('+password');

    if(!user){
        return res.status(401).json({ message: 'Invalid email or password'});
    }
    
    const isMatch = await user.comparePassword(password);
    
    if(!isMatch){
        return res.status(401).json({ message: 'Invalid email or password'});
    }

    const token = user.generateAuthToken();
    res.cookie('token', token);
    res.status(200).json({ token, user });

}

module.exports.getUserProfile = async(req, res, next) => {
    res.status(200).json(req.user);
}

module.exports.logOutUser = async(req, res, next) => {
    res.clearCookie('token');
    const token = req.cookies.token || req.headers.authorization.split(' ')[1];
    await BlackListTokenModel.create({token});
    res.status(200).json({ message: 'Logged Out' });
}