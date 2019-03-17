// Updates a tag that getTag MW gets out from the database with the data supplied by post (depending on url parameters)
module.exports = (objectRepository) => {
  return (req, res, next) => {
    if (typeof req.body.name === "undefined") return next();

    // Check name collision
    objectRepository.Tag.findOne({ "name": req.body.name }).exec((err, result) => {
      if (err) { return next(err); }
      if (result) return res.redirect("/tags");

      let tag = (res.locals.tag) ? res.locals.tag : new objectRepository.Tag();
      tag.name = req.body.name;

      if (tag.isNew) {
        res.locals.tag = tag;
      }

      tag.save((err) => {
        if (err) { return next(err); };
        res.redirect("/tags");
      });
    });
  }
}