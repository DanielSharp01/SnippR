// Gets a single snippet from the database (depending on url parameters)

module.exports = (objectRepository) => {
    return (req, res, next) => {
        objectRepository.Snippet.findOne({"_id": req.params.snippetid})
        .populate("tags")
        .exec((err, result) => {
            if (err) console.error(err);
            res.locals.snippet = result;
            return next();
        });
    }
}