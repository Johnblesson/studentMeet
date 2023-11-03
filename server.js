const express = require('express')
const app = express()
require('dotenv').config()
const path = require('path')
const ejs = require('ejs')
const session = require('express-session');
// require('./server/database/db')

// Bulit in Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// View Engine
const templatePath = path.join(__dirname, './views');
app.set('view engine', 'ejs');
app.set('views', templatePath);

// Serve static files from the 'public' directory
app.use(express.static('public')) 

// Add express-session middleware
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
  }));

// Routes
const authRoute = require('./server/routes/mainRoute')

// app.use(shoppingRoute)
app.use(authRoute)

// OAuth


// Start the Server  
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})