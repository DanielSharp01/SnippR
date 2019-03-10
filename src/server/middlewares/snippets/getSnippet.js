// Gets a single snippet from the database (depending on url parameters)

module.exports = (objectRepository) => {
    return (req, res, next) => {
        res.locals.editedSnippet = {content: "test1", tags: ["test1", "test2"], id: 1};
        return next();
    }
}