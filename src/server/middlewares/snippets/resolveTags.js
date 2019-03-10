// Resolves addable tags in snippet add or mod requests

const async = require("async");

module.exports = (objectRepository) => {
    return (req, res, next) => {
        
        if (typeof req.body.tags === "undefined") return next();

        // This may be easier with async library
        res.locals.resolvedTags = [];

        async.mapSeries(req.body.tags, async tag => {
            const dbTag = await objectRepository.Tag.findOne({"name": tag});
            if (!dbTag)
            {
                let newTag = new objectRepository.Tag();
                newTag.name = tag;
                newTag = await newTag.save();

                if (!res.locals.resolvedTags.some(id => id.equals(newTag._id)))
                    res.locals.resolvedTags.push(newTag._id);
            }
            else
            {
                if (!res.locals.resolvedTags.some(id => id.equals(dbTag._id)))
                    res.locals.resolvedTags.push(dbTag._id);
            }
        }, () => next());
    }
}