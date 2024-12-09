
const UserModel = require('../models/UserModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const BlackListTokenModel = require('../models/BlackListTokenModel');
const CaptainModel = require('../models/CaptainModel');

module.exports.authUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    if(!token){
        return res.status(401).json({message: 'Unauthorized'});
    }
    const isBlackListed = await BlackListTokenModel.findOne({ token: token});

    if(isBlackListed){
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await UserModel.findById(decoded._id)
        req.user = user;
        return next();
    } catch (error) {
        return res.status(401).json({message: 'Un-authorized'});
    }

}

module.exports.authCaptain = async (req, res, next) => {

    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    if(!token){
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const isBlacklisted = await BlackListTokenModel.findOne({ token: token });

    if(isBlacklisted) return res.status(401).json({ message: 'Unauthorized' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const captain = await CaptainModel.findById(decoded._id);
        req.captain = captain;
        return next();
    } catch (error) {
        res.status(401).json({message: "Unauthorized"});
    }
}
