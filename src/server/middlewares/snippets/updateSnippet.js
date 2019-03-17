// Update a snippet that getSnippet MW gets out from the database with the data supplied by post

module.exports = (objectRepository) => {
  return (req, res, next) => {

    if (typeof req.body.content === "undefined") return next();

    let snippet = (res.locals.snippet) ? res.locals.snippet : new objectRepository.Snippet();
    snippet.content = req.body.content;
    snippet.tags = res.locals.resolvedTags;

    if (snippet.isNew) {
      res.locals.snippet = snippet;
    }

    snippet.save((err) => {
      if (err) { return next(err); };
      return res.redirect("/snippets" + (req.query.tag ? `?filter=${req.query.tag}` : ""));
    });
  }
}