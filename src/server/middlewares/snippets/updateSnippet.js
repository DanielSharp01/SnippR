// Updates a snippet in the database with the data supplied by post (depending on url parameters)

module.exports = (objectRepository) => {
    return (req, res, next) => {
        
        if (typeof req.body.content === "undefined") return next();

        let snippet = (res.locals.snippet) ? res.locals.snippet : new objectRepository.Snippet();
        snippet.content = req.body.content;
        snippet.tags = res.locals.resolvedTags;
        snippet.save((err) =>
        {
            if (err) {console.error(err); return next();}; 
            return res.redirect("/snippets");
        });
    }
}