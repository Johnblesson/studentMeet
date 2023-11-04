const { Router } = require('express');
const router = Router();

// Import Controllers
const studentController = require('../controllers/studentController');
const allController = require('../controllers/allController');

// Import Middlewares
const ensureAuthenticated = require('../middlewares/auth');
const checkFormSubmission = require('../middlewares/authForm');
const verifyToken = require('../middlewares/verifyToken');

// Student Routes
router.post('/register', studentController.register);
router.post('/login', studentController.login);
router.get('/students', studentController.getAllStudents);
router.get('/students/:id', studentController.getStudentById);
router.get('/logout', studentController.logOut);

// Contact Form Routes
router.post('/contact', allController.createContactForm);
router.get('/contact', verifyToken, allController.getAllContactForms);

// Feedback Routes
router.post('/feedback', allController.createFeedback);
router.get('/get_feedback', verifyToken, allController.getAllFeedbacks);

// Newsletter Routes
router.post('/newsletter', allController.createNewsletter);
router.get('/get_newsletter', verifyToken, allController.getAllNewsletters);

// Login to get access to the protected routes (jwt)
router.post('/api/login', allController.getToken);

// Routes
router.get('/', (req, res) => {
    res.render('login')
})

router.get('/index', ensureAuthenticated, (req, res) => {
    res.render('index')
})

// router.get('/login', (req, res) => {
//     res.render('login')
// })

// router.get('/register', (req, res) => {
//     res.render('register')
// })

router.get('/computer_courses', ensureAuthenticated, (req, res) => {
    res.render('computer_courses')
})

router.get('/jee', ensureAuthenticated, (req, res) => {
    res.render('jee')
})

router.get('/quiz', ensureAuthenticated, (req, res) => {
    res.render('quiz')
})

router.get('/gate', ensureAuthenticated, (req, res) => {
    res.render('gate')
})

router.get('/success', checkFormSubmission, (req, res) => {
    res.render('success')
})

router.get('/feedback', checkFormSubmission, (req, res) => {
    res.render('feedback')
})

router.get('/newsletter', checkFormSubmission, (req, res) => {
    res.render('newsletter')
})

router.get('/forbidden', (req, res) => {
    res.render('forbidden')
})

module.exports = router