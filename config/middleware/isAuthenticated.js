// This is middleware for restricting routes a user is not allowed to visit if not logged in
module.exports = function(req, res, next) {
    // If the user is logged in, continue with the request to the restricted route
    if (req.user) {
      return next();
    }
  
    // If the user isn't logged in, redirect them to the login page
    //C:\BracketBuilderApex\apex-react-1.1\apex-react\src\views\pages\login.js
    //C:\BracketBuilderApex\apex-react-1.1\apex-react\config\middleware\isAuthenticated.js
    return res.redirect("../../../src/views/pages/login.js");
  };