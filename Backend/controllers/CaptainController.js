const CaptainModel = require('../models/CaptainModel');

const CaptainService = require('../services/CaptainServices');
const { validationResult } = require('express-validator')

module.exports.registerCaptain = async(req, res, next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array()})
    }

    const { fullname, email, password, vehicle} = req.body;

    const isCaptainAlreadyExist = await CaptainModel.findOne({ email });

    if(isCaptainAlreadyExist) return res.status(400).json({message: 'Captain already exist'})

    const hashedPassword = await CaptainModel.hashPassword(password);

    const captain = await CaptainService.createCaptain({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword,
        color: vehicle.color,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
        vehicleType: vehicle.vehicleType
    });

    const token = captain.generateAuthToken();

    res.status(201).json({ token, captain })
}