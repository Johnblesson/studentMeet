function checkFormSubmission(req, res, next) {
    if (!req.session.formSubmitted) {
      // Redirect or handle unauthorized access as desired
      return res.redirect('/'); // Redirect to the home page
    }
    next();
  }

  module.exports = checkFormSubmission;
