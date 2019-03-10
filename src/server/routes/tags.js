const authMW = require("../middlewares/common/auth");
const renderMW = require("../middlewares/common/render");
const getTagMW = require("../middlewares/tags/getTag");
const getTagListMW = require("../middlewares/tags/getTagList");
const updateTagMW = require("../middlewares/tags/updateTag");
const deleteTagMW = require("../middlewares/tags/deleteTag");

module.exports = (app, objectRepository) => {
    app.use("/tags/add",
        authMW(objectRepository),
        updateTagMW(objectRepository),
        getTagListMW(objectRepository), // For snippets in the background
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