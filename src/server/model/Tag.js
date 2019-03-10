const db = require("../db");

module.exports = db.model("Tag", {
    name: String
});