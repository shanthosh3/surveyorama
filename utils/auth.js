const passport= require('passport');
//to add authentication using passport.js
const withAuth = (req, res, next)=>{
    if(!req.session.loggedIn){
        passport.authenticate('local', {failureRedirect: '/login'})
    }else{
        next()
    }
 }
    
    
    module.exports = withAuth;