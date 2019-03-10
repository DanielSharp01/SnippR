const mongoose = require('mongoose');

// Gets the list of snippets from the database
module.exports = (objectRepository) => {
    return (req, res, next) => {
        res.locals.activeTag = req.query.filter && req.query.filter;
        
        objectRepository.Snippet.find(res.locals.activeTag ?
            {"tags": mongoose.Types.ObjectId(res.locals.activeTag)}
            : {})
        .populate("tags")
        .exec((err, result) => {
            if (err) { console.error(err); return next();}
            res.locals.snippets = result;
            return next();
        });
    }
}