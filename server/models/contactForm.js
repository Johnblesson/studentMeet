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
    meessage: {
        type: String,
        require: true,
    },
    additiomalDetails: {
        type: String,
        require: false,
    }
})
const ContactForm = mongoose.model('contactForm', contactSchema)

module.exports = ContactForm;