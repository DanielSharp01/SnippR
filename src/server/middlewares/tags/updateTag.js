// Updates a tag that getTag MW gets out from the database with the data supplied by post (depending on url parameters)
module.exports = (objectRepository) => {
  return (req, res, next) => {
    if (typeof req.body.name === "undefined") return next();

    // Check name collision
    objectRepository.Tag.findOne({ "name": req.body.name }).exec((err, result) => {
      if (err) { console.error(err); return next(); }
      if (result) return res.redirect("/tags");

      let tag = (res.locals.tag) ? res.locals.tag : new objectRepository.Tag();
      tag.name = req.body.name;

      tag.save((err) => {
        if (err) { console.error(err); return next(); };
        res.redirect("/tags");
      });
    });
  }
}