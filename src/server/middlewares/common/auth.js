// Redirect to /login if the user is not authenticated

module.exports = (objectRepository) => {
    return (req, res, next) => {
        req.session.userId = 1;
        if (typeof req.session.userId === 'undefined')
            return res.redirect('/login')
        
        return next();
    }
}