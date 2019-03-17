// Get the list of tags from the database

module.exports = (objectRepository) => {
  return (req, res, next) => {
    objectRepository.Tag.find({}).exec((err, result) => {
      if (err) return next(err);
      res.locals.tags = result;
      return next();
    });
  }
}