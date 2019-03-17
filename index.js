const express = require('express');
const app = express();

const session = require('express-session');
const bodyParser = require('body-parser');

const commonRoutes = require("./src/server/routes/common");
const tagRoutes = require("./src/server/routes/tags");
const snippetRoutes = require("./src/server/routes/snippets");

const objectRepository = {
  Snippet: require("./src/server/model/Snippet"),
  Tag: require("./src/server/model/Tag")
}

app.set('view engine', 'ejs');
app.set('views', './src/server/views');

app.use(express.static('./public'));

app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: false
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

commonRoutes(app, objectRepository);
snippetRoutes(app, objectRepository);
tagRoutes(app, objectRepository);

app.listen(8080, function () {
  console.log("Listening on 8080")
});

app.use((err, req, res, next) => {
  if (err.stack) console.error(err.stack);
  else console.err(err);
  res.status(500).render("error", { statusCode: res.statusCode });
});