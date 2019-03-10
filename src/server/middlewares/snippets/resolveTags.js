// Resolves addable tags in snippet add or mod requests

module.exports = (objectRepository) => {
    return (req, res, next) => {
        
        if (typeof req.body.tags === "undefined") return next();

        // This may be easier with async library
        res.locals.resolvedTags = [];
        Promise.all(req.body.tags.map(tag => { return objectRepository.Tag.findOne({"name": tag})
            .then(dbtag => {
                return { tag, dbtag };
            });
        }))
        .then((findResults) => findResults.map(findResult => {
            if (!findResult.dbtag)
            {
                let newTag = new objectRepository.Tag();
                newTag.name = findResult.tag;
                return newTag.save().then(saveRes => saveRes._id);
            }
            else
            {
                return Promise.resolve(findResult.dbtag._id);
            }
        })).then(idPromises => {
            Promise.all(idPromises).then(ids => {
                ids.forEach(id => res.locals.resolvedTags.push(id));
                next();
            });
        });
    }
}