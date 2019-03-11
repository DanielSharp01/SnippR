// Redirects to /login if required /snippets otherwise

module.exports = (objectRepository) => {
    return (req, res, next) => {
        if (typeof req.session.userId === 'undefined')
            return res.redirect('/login')
        else
            return res.redirect('/snippets')
    }
}