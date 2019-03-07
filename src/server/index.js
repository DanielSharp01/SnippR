let express = require('express');
let bodyParser = require('body-parser');
let app = express();

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.post("/posttest", (req, res, next) => {
    res.json(req.body).end();
});

let server = app.listen(8080, function () {
    console.log("Listening on 8080")
});