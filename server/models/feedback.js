const mongoose = require('mongoose')

const feedbackSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    additionalDetails: {
        type: String,
        require: true,
    }
})
const Feedback = mongoose.model('feedback', feedbackSchema)

module.exports = Feedback;