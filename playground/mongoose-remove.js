const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove({_id: '59dbcc7b2433ed2d218e6eea'}).then((todo) => {

// });

Todo.findByIdAndRemove('59dbcc7b2433ed2d218e6eea').then((todo) => {
    console.log(todo);
});