module.exports = (objectRepository) => {
    return (req, res, next) => {
        res.locals.editedTag = {content: "test1", id: 1};
        return next();
    }
}