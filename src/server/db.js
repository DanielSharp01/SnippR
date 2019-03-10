let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/SnippR', {useNewUrlParser: true});

module.exports = mongoose;