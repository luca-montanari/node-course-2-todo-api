var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

//mongoose.connect('mongodb://localhost:27017/TodoApp');

//mongoose.connect('mongodb://admin:admin@ds113435.mlab.com:13435/node-todo-api');

mongoose.connect(process.env.MONGODB_URI);

module.exports = {mongoose};

