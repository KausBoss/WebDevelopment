const express = require('express');
const app = express();
let todo = [];

app.use('/', express.static(__dirname + '/static'));

app.get('/addtodo', (req, res) => {
	todo.push(req.query.task);
	// res.send('Task added successfully');
	res.redirect('/todo');
});

app.get('/todo', (req, res) => {
	res.send(todo);
});

// app.get('/', (req, res) => {
// 	res.sendFile(__dirname + '/index.html');
// });

app.listen(4444, () => {
	console.log('Server started at http://localhost:4444');
});
