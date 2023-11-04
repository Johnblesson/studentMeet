const jwt = require('jsonwebtoken');
const AdminUser = require('../config/config')
const contactForm = require('../models/contactForm');
const Feedback = require('../models/feedback');
const Newsletter = require('../models/newsletter');
require('dotenv').config()

// Create a new contact form
exports.createContactForm = async (req, res) => {
    try {
        const newContactForm = await contactForm.create(req.body);
        res.status(201).render('success')
        // res.status(201).json({
        //     status: 'success',
        //     data: {
        //         contactForm: newContactForm
        //     }
        // })

    // Set a session variable to indicate successful form submission
    req.session.formSubmitted = true;

    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }
}

// Get all contact forms
exports.getAllContactForms = async (req, res) => {
    try {
        const contactForms = await contactForm.find();
        res.status(200).json({
            status: 'success',
            results: contactForms.length,
            data: {
                contactForms
            }
        })
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }
}

// Create a new feedback
exports.createFeedback = async (req, res) => {
    try {
        const newFeedback = await Feedback.create(req.body);
        res.status(201).render('feedback')
        // res.status(201).json({
        //     status: 'success',
        //     data: {
        //         feedback: newFeedback
        //     }
        // })

    // Set a session variable to indicate successful form submission
    req.session.formSubmitted = true;

    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }
}

// Get all feedbacks
exports.getAllFeedbacks = async (req, res) => {
    try {
        const feedbacks = await Feedback.find();
        res.status(200).json({
            status: 'success',
            results: feedbacks.length,
            data: {
                feedbacks
            }
        })
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }
}

// Create a new newsletter
exports.createNewsletter = async (req, res) => {
    try {
        const newNewsletter = await Newsletter.create(req.body);
        res.status(201).render('newsletter')
        // res.status(201).json({
        //     status: 'success',
        //     data: {
        //         newsletter: newNewsletter
        //     }
        // })

    // Set a session variable to indicate successful form submission
    req.session.formSubmitted = true;

    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }
}

// Get all newsletters
exports.getAllNewsletters = async (req, res) => {
    try {
        const newsletters = await Newsletter.find();
        res.status(200).json({
            status: 'success',
            results: newsletters.length,
            data: {
                newsletters
            }
        })
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }
}

// To get JWT token
exports.getToken = (req, res) => {
    // Mock user
    // AdminUser
    jwt.sign({ AdminUser }, process.env.JWT_SECRET, { expiresIn: '30s' }, (err, token) => {
        res.json({
            token
        });
    });
}