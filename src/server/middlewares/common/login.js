// Checks information and logs in the user if it's correct

module.exports = (objectRepository) => {
    return (req, res, next) => {
        if (typeof req.body.username === 'undefined' || typeof req.body.password === 'undefined')
            return next();
        
        // Hardcoded login
        if (req.body.username === "admin" && req.body.username === "admin")
        {
            req.session.userId = 1;
            res.redirect("/");
        }
        else return next();
    }
}