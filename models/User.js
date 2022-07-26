const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {type: String, required:true, minlength: 8, maxlength: 20 },
    email: {type: String, required:true, minlength: 8, maxlength: 100},
    password: {type: String, required:true, minlength: 6, maxlength: 50},
    confirmPassword: {type: String, required:true, minlength: 6, maxlength: 50},
    assinante: {type: Boolean, default: false},
    createdAt: {type: Date, default: Date.now }
})

module.exports = mongoose.model('User', userSchema)