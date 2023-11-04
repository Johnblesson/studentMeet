const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        require: true,
    },
    username: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    image: {
        type: String, // Store the image as a binary buffer
        required: false,
    }
})
const Credential = mongoose.model('credential', userSchema)

module.exports = Credential;