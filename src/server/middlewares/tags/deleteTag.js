// Delete a tag that getTag MW gets out from the database

module.exports = (objectRepository) => {
  return (req, res, next) => {
    if (!res.locals.tag) return next();

    res.locals.tag.remove((err) => {
      if (err) console.error(err);
      return next();
    });
  }
}