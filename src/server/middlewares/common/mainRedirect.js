// Redirects to /login if required /snippets otherwise

module.exports = (objectRepository) => {
    return (req, res, next) => {
        if (typeof req.session.userId === 'undefined')
            res.redirect('/login')
        else
            res.redirect('/snippets')
    }
}