const authMW = require("../middlewares/common/auth");
const renderMW = require("../middlewares/common/render");
const getSnippetMW = require("../middlewares/snippets/getSnippet");
const getSnippetListMW = require("../middlewares/snippets/getSnippetList");
const updateSnippetMW = require("../middlewares/snippets/updateSnippet");
const deleteSnippetMW = require("../middlewares/snippets/deleteSnippet");
const resolveTagsMW = require("../middlewares/snippets/resolveTags");

module.exports = (app) => {
    let objectRepository = {}

    app.use("/snippets/add",
        authMW(objectRepository),
        resolveTagsMW(objectRepository),
        updateSnippetMW(objectRepository),
        getSnippetListMW(objectRepository), // For snippets in the background
        (req, res, next) => {res.locals.add = true; next();},
        renderMW(objectRepository, "snippetMod")
    );

    app.use("/snippets/mod/:snippetid",
        authMW(objectRepository),
        getSnippetMW(objectRepository),
        resolveTagsMW(objectRepository),
        updateSnippetMW(objectRepository),
        getSnippetListMW(objectRepository), // For snippets in the background
        renderMW(objectRepository, "snippetMod")
    );

    app.use("/snippets/del/:snippetid",
        authMW(objectRepository),
        getSnippetMW(objectRepository),
        deleteSnippetMW(objectRepository),
        (req, res, next) => res.redirect("/snippets")
    );

    app.get("/snippets", 
        authMW(objectRepository),
        getSnippetListMW(objectRepository),
        renderMW(objectRepository, "snippetList")
    );
}