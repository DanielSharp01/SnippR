module.exports = (objectRepository) => {
    return (req, res, next) => {
        req.session.destroy((err) => {
            return next();
        });
    }
}