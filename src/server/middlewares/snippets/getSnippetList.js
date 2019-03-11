const mongoose = require('mongoose');

// Gets the list of snippets from the database
module.exports = (objectRepository) => {
    return (req, res, next) => {
        objectRepository.Tag.findOne({_id: req.query.filter}).then(result => {
            res.locals.activeTag = result;
            return objectRepository.Snippet.find(res.locals.activeTag ?
                {"tags": res.locals.activeTag._id}
                : {})
            .populate("tags");
        })
        .then(snippets => {res.locals.snippets = snippets; return next();})
        .catch(err => {console.log("Error"); return next();});
    }
}