const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const CaptainSchema = mongoose.Schema({
    fullname:{
        firstname:{
            type: String,
            required: true,
            minlength: [3, 'Firstname must be atleast 3 characters long'],
        }, 
        lastname:{
            type: String,
            minlength: [ 3, 'Lastname must be atleast 3 characters long' ],
        }
    }, 
    email:{
        type: String,
        required: true,
        unique: true, 
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email']
    }, 
    password:{
        type: String, 
        required: true,
        select: false,
    }, 
    socketId:{
        type: String,
    },

    status:{
        type: String, 
        enum: ['active', 'inactive'], 
        default: 'inactive'
    },

    vehicle:{
        color:{
            type: String,
            required: true, 
            minlength: [3, 'Color must be atleast 3 characters long']
        }, 
        plate:{
            type: String,
            required: true,
            minlength: [3, 'Plate must be atleast 3 characters long']
        }, 
        capacity: {
            type: Number, 
            required: true,
            min: [1, 'Capacity must be atleast 1 character'],
        }, 
        vehicleType: {
            type: String,
            required: true, 
            enum: ['car', 'motorcycle', 'auto'],
        }
    },
    location: {
        lat:{
            type: Number,
        }, 
        lng: {
            type: Number,
        }
    }
})

CaptainSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id: this._id,}, process.env.JWT_SECRET, { expiresIn: '24h' });
    return token;
}

CaptainSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password);
}

CaptainSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password, 10)
}

module.exports= mongoose.model('captain',CaptainSchema)
