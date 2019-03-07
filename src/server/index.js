let express = require('express');
let app = express();

app.use(express.static('public'));

let server = app.listen(8080, function () {
    console.log("Listening on 8080")
});