const bcrypt = require('bcrypt')
const { body, validationResult } = require('express-validator');
// const session = require('express-session');
const Credential = require('../models/auth')
const ensureAuthenticated = require('../middlewares/auth');

// User Registration
exports.register = async (req, res) => {
    // Validation checks
    const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
    }

    // Create a session
    req.session.user = {
    // Other user information
        isRegister: true,
        isLogin: true,
    };

    try {   
    // Hashed Password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

    const data = new Credential({
        fullName: req.body.fullName, 
        username: req.body.username, 
        email: req.body.email, 
        password: hashedPassword
    })

     // Check for duplicate usernames
     const existingUser = await Credential.findOne({ username: data.username });
     if (existingUser) {
       return res.status(400).json({ error: 'Username is already taken' });
     }

    // Ensure the password contains at least one uppercase letter, one lowercase letter, and is at least 6 characters long
    if (!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(req.body.password)) {
        return res.status(400).json({
          error: 'Password must be at least 6 characters long and contain both uppercase and lowercase letters.',
        });
    }

    const newData = await data.save();
    // res.status(201).json(newData);
    res.render('index')
    }
    catch (error) {
        res.status(400).json({ message: err.message });
    }
}

// Users Login
exports.login = async (req, res) => {
    try {
        const user = await Credential.findOne({ username: req.body.username });

        if (!user) {
            return res.json({message: 'User not found'});
        }

        const passwordMatch = await bcrypt.compare(req.body.password, user.password);

        if(passwordMatch) {
            res.render('index')
           // res.json({message: 'Login Successfully'})

        } else {
            res.json({ message: 'Incorrect password'});
          }
    } catch (error) {
        res.send('An error occurred while logging in.');
    }
}

// Controller for GET all students
exports.getAllStudents = async (req, res) => {
    try {
      const students = await Credential.find();
      res.json(students);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  // Logout Controller
exports.logOut = (req, res) => {
    req.session.destroy((err) => {
        if (err) {
          console.error(err);
        }
        res.redirect('/');
      });
}