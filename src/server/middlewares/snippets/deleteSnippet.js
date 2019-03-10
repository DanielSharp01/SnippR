// Deletes a snippet from the database (depending on url parameters)

module.exports = (objectRepository) => {
    return (req, res, next) => {
        if (!res.locals.snippet) return next();
        
        res.locals.snippet.remove((err) =>
        {
            if (err) console.error(err);
            return next();
        });
    }
}