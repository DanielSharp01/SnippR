const express = require('express');
const app = express();

const session = require('express-session');
const bodyParser = require('body-parser');

const commonRoutes = require("./src/server/routes/common");
const snippetRoutes = require("./src/server/routes/tags");
const tagRoutes = require("./src/server/routes/snippets");

app.set('view engine', 'ejs');
app.set('views','./src/server/views');

app.use(express.static('./public'));

app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: false
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

commonRoutes(app);
snippetRoutes(app);
tagRoutes(app);

app.listen(8080, function () {
    console.log("Listening on 8080")
});

app.use((err, req, res, next) => {
    res.status(500).send("A team of highly trained monkeys has been dispatched to deal with this situation.");
    console.error(err.stack);
});