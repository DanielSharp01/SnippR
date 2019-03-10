// Gets a single tag from the database (depending on url parameters)

module.exports = (objectRepository) => {
    return (req, res, next) => {
        objectRepository.Tag.findOne({"_id": req.params.tagid}).exec((err, result) => {
            if (err) console.error(err);
            res.locals.tag = result;
            return next();
        });
    }
}