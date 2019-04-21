// Resolve addable tags in snippet add or mod requests

const async = require("async");

module.exports = (objectRepository) => {
  return (req, res, next) => {

    if (typeof req.body.tags === "undefined") return next();

    res.locals.resolvedTags = [];

    let err = undefined;
    async.mapSeries(req.body.tags, async tag => {
      if (err) return;

      let dbTag;
      try {
        dbTag = await objectRepository.Tag.findOne({ "name": tag });
      }
      catch (e) {
        err = e;
        return;
      }

      if (!dbTag) {
        let newTag = new objectRepository.Tag();
        newTag.name = tag;
        try {
          newTag = await newTag.save();
        }
        catch (e) {
          err = e;
          return;
        }

        if (!res.locals.resolvedTags.some(id => id.equals(newTag._id)))
          res.locals.resolvedTags.push(newTag._id);
      }
      else {
        if (!res.locals.resolvedTags.some(id => id.equals(dbTag._id)))
          res.locals.resolvedTags.push(dbTag._id);
      }
    }, () => next(err));
  }
}