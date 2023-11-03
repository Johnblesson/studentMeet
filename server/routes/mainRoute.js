const { Router } = require('express');
const router = Router();

// Import Controllers


// Import Middlewares


// Routes
router.get('/', (req, res) => {
    res.render('index')
})

router.get('/login', (req, res) => {
    res.render('login')
})

router.get('/register', (req, res) => {
    res.render('register')
})

router.get('/computer_courses', (req, res) => {
    res.render('computer_courses')
})

router.get('/jee', (req, res) => {
    res.render('jee')
})

router.get('/quiz', (req, res) => {
    res.render('quiz')
})

router.get('/gate', (req, res) => {
    res.render('gate')
})

module.exports = router