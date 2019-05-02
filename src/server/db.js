let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dhdacw', { useNewUrlParser: true });

module.exports = mongoose;