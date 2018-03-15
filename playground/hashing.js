//JASON WEB TOKEN SUPPORT
const bcrypt = require('bcryptjs');
const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');


var password = '123abc!';

bcrypt.genSalt(10, (err, salt)=>{
	bcrypt.hash(password, salt, (err, hash)=>{
		console.log(hash);
	})
});

var hashedPassword = '$2a$10$3sAcEyZ8ro5yAR3g5pkaAevD7ESN2iMYvY/tUIE1k8CXFNFr34e9W';

bcrypt.compare(password, hashedPassword, (err, res)=>{
	console.log(res);
});

// var data= {
// 	id: 10
// };

// var token = jwt.sign(data, 'abc123') //takes the id and secret to hash
// console.log(token);

// var decoded = jwt.verify(token, 'abc123');
// console.log(decoded);

// var message = 'I am user number 3';
// var hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);

// var data = {
// 	id: 4
// };
// var token = {
// 	data,
// 	hash: SHA256(JSON.stringify(data) + 'something').toString()
// }

// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();

// var resultHash = SHA256(JSON.stringify(data) + 'something').toString();

// if(resultHash == token.hash){
// 	console.log('Data was not changed');
// }
// else{
// 	console.log('Data was change. Do not trust');
// }