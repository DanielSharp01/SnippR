module.exports = (objectRepository) => {
    return (req, res, next) => {
        if (typeof req.session.userId === 'undefined')
            return res.redirect('/login')
        
        return next();
    }
}