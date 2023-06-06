const { Schema, model } = require('mongoose');

const UserSchema = Schema({
    username: {
        type: String,
        required: [true, 'Username mandatory']
    },
    password: {
        type: String,
        required: [true, 'Password mandatory']
    },
    name: {
        type: String,
        required: [true, 'Password mandatory']
    },
    email: {
        type: String,
        required: [true]
    },
    role: {
        type: String,
        enum: ['ADMIN', 'USER']
    },
    img: {
        type: String
    }
    
})

UserSchema.methods.toJSON = function(){
    const {__v, password, _id, ...user} = this.toObject();
    user.uid = _id;
    return user;
}

module.exports = model('User', UserSchema)