// Gets the list of snippets from the database

module.exports = (objectRepository) => {
    return (req, res, next) => {
        res.locals.activeTag = req.query.filter && parseInt(req.query.filter) // This cannot really live anywhere else
        res.locals.snippets = [
            {content: "test1", tags: ["test1", "test2"], id: 1},
            {content: "test2", tags: ["test3", "test4"], id: 2}
        ];
        return next();
    }
}