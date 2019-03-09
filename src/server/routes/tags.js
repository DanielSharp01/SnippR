const authMW = require("../middlewares/common/auth");
const renderMW = require("../middlewares/common/render");
const getTagMW = require("../middlewares/snippets/getSnippet");
const getTagListMW = require("../middlewares/snippets/getSnippetList");
const updateTagMW = require("../middlewares/snippets/updateSnippet");
const deleteTagMW = require("../middlewares/snippets/deleteSnippet");

module.exports = (app) => {
    let objectRepository = {}

    app.use("/tags/add",
        authMW(objectRepository),
        updateTagMW(objectRepository),
        getTagListMW(objectRepository), // For snippets in the background
        (req, res, next) => {res.locals.add = true; next();},
        renderMW(objectRepository, "tagMod")
    );

    app.use("/tags/mod/:tagid",
        authMW(objectRepository),
        getTagMW(objectRepository),
        updateTagMW(objectRepository),
        getTagListMW(objectRepository), // For snippets in the background
        renderMW(objectRepository, "tagMod")
    );

    app.use("/tags/del/:tagid",
        authMW(objectRepository),
        getTagMW(objectRepository),
        deleteTagMW(objectRepository),
        (req, res, next) => res.redirect("/tags")
    );

    app.get("/tags", 
        authMW(objectRepository),
        getTagListMW(objectRepository),
        renderMW(objectRepository, "tagList")
    );
}