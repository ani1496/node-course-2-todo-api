const {ObjectID} = require('mongodb');

const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
const {mongoose} = require('./../server/db/mongoose');

// Todo.remove({}).then((result)=>{
// 	console.log(result);
// });

//Todo.findOneAndRemove()
//Todo.findByIdAndRemove()

Todo.findByIdAndRemove('5a567fcf226789275dad0231').then((todo)=>{
	console.log(todo);
});

Todo.findOneAndRemove(ObjectId({_id: '5a568084226789275dad025c'}).then((todo)=>{
	console.log(todo);
});