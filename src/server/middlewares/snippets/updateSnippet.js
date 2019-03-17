// Update a snippet that getSnippet MW gets out from the database with the data supplied by post

module.exports = (objectRepository) => {
  return (req, res, next) => {

    if (typeof req.body.content === "undefined") return next();

    let snippet = (res.locals.snippet) ? res.locals.snippet : new objectRepository.Snippet();
    snippet.content = req.body.content;
    snippet.tags = res.locals.resolvedTags;
    snippet.save((err) => {
      if (err) { console.error(err); return next(); };
      return res.redirect("/snippets" + (req.query.tag ? `?filter=${req.query.tag}` : ""));
    });
  }
}