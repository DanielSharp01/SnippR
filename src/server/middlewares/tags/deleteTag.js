// Deletes a tag from the database (depending on url parameters)

module.exports = (objectRepository) => {
    return (req, res, next) => {
        if (!res.locals.tag) return next();
        
        res.locals.tag.remove((err) =>
        {
            if (err) console.error(err);
            return next();
        });
    }
}