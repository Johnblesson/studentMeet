const mongoose = require('mongoose')

const newsletterSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true,
    }
})
const Newsletter = mongoose.model('newsletter', newsletterSchema)

module.exports = Newsletter;
