// Get a single tag from the database (:tagid URL parameter)

module.exports = (objectRepository) => {
  return (req, res, next) => {
    objectRepository.Tag.findOne({ "_id": req.params.tagid }).exec((err, result) => {
      if (err) return next(err);
      res.locals.tag = result;
      if (!result) return next(new Error("No tag with id " + req.params.tagid));

      return next();
    });
  }
}