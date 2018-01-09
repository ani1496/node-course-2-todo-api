const {ObjectID} = require('mongodb');

const {User} = require('./../server/models/user');
const {mongoose} = require('./../server/db/mongoose');

// var id = '5a4bf40ff4adbe93a66b091511';
var id = '5a4aa7f729d28287587cf9f4';
// if(!ObjectID.isValid(id)){
// 	console.log('Id not valid');
// }

// Todo.find({
// 	_id: id
// }).then((todos)=>{
// 	console.log('Todos', todos);
// });

// Todo.findOne({
// 	_id: id
// }).then((todo)=>{
// 	console.log('Todo', todo);
// });

// Todo.findById(id).then((todo)=>{
// 	if(!todo){
// 		return console.log('Id not found');
// 	}
// 	console.log('Todo by ID', todo);
// }).catch((e) => console.log(e));

User.findById({
	_id: id
}).then((user)=>{
	if(!user){
		console.log('User not found');
	}
	console.log( JSON.stringify(user, undefined, 2));
}, (e)=>{
	console.log(e)
});

