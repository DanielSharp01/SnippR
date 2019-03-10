// Gets the list of tags from the database

module.exports = (objectRepository) => {
    return (req, res, next) => {
        res.locals.tags = [
            {content: "test1", id: 1},
            {content: "test2", id: 2},
            {content: "test3", id: 3},
            {content: "test4", id: 4}
        ];

        return next();
    }
}