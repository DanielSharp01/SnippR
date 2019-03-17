// Get a single tag from the database (:tagid URL parameter)

module.exports = (objectRepository) => {
  return (req, res, next) => {
    objectRepository.Tag.findOne({ "_id": req.params.tagid }).exec((err, result) => {
      if (err) console.error(err);
      res.locals.tag = result;
      return next();
    });
  }
}