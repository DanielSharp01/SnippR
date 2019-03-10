const db = require("../db");
const Schema = require("mongoose").Schema;

module.exports = db.model("Snippet", {
    content: String,
    tags: [{type: Schema.Types.ObjectId, ref: "Tag"}]
});