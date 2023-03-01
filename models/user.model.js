const {Schema,model} = require('mongoose')

const UserSchema = new Schema({
    userName: {
        type: String,
        required: true,
        unique:true,
    }, 
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: false,
    },
    phone: {
        type: Number,
        required: false,
    },
    country: {
        type: String,
        required: true,
    }, 
    about: {
        type: String,
        required: false,
    },
    isSeller: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps:true
})

module.exports = model("User", UserSchema);