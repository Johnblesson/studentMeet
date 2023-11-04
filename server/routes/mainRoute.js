const { Router } = require('express');
const router = Router();

// Import Controllers
const studentController = require('../controllers/studentController');

// Import Middlewares
const ensureAuthenticated = require('../middlewares/auth');

// Student Routes
router.post('/register', studentController.register);
router.post('/login', studentController.login);
router.get('/students', studentController.getAllStudents);
router.get('/students/:id', studentController.getStudentById);
router.get('/logout', studentController.logOut);

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

router.get('/success', (req, res) => {
    res.render('success')
})

router.get('/forbidden', (req, res) => {
    res.render('forbidden')
})

module.exports = router