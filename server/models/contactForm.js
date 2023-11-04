const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require: true,
    },
    lastName: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    message: {
        type: String,
        require: true,
    },
    additionalDetails: {
        type: String,
        require: true,
    }
})
const ContactForm = mongoose.model('contactForm', contactSchema)

module.exports = ContactForm;