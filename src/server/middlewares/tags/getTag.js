// Gets a single tag from the database (depending on url parameters)

module.exports = (objectRepository) => {
    return (req, res, next) => {
        res.locals.editedTag = {content: "test1", id: 1};
        return next();
    }
}