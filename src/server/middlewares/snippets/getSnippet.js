// Get a single snippet from the database (:snippetid URL parameter)

module.exports = (objectRepository) => {
  return (req, res, next) => {
    objectRepository.Snippet.findOne({ "_id": req.params.snippetid })
      .populate("tags")
      .exec((err, result) => {
        if (err) return next(err);
        res.locals.snippet = result;

        if (!result) return next(new Error("No snippet with id " + req.params.snippetid));

        return next();
      });
  }
}