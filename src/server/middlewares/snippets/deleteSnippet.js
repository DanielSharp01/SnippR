// Delete a snippet that getSnippet MW gets out ffom the database

module.exports = (objectRepository) => {
  return (req, res, next) => {
    if (!res.locals.snippet) return next();

    res.locals.snippet.remove((err) => {
      if (err) console.error(err);
      return next();
    });
  }
}