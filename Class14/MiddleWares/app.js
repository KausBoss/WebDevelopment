const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true })); //to get the body encoded data
app.use(express.json); //to parse json coded body post

function m1(req, res, next) {
	console.log('Running m1');
	if (req.query.m == 1) {
		return res.send('Value of m is 1');
	}
	next();
}

function m2(req, res, next) {
	console.log('Running m2');
	next();
}

function m3(req, res, next) {
	console.log('Running m3');
	next();
}

app.use('/bye', m1); //path specific
//path specific run for /path as well as for /path/anything xyz
app.use(m2); // global middleware
app.use(m3);

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
	console.log(req.body);
	res.send('Post request Success ');
});

app.listen(4444, () => {
	console.log('Server started at http://localhost:4444');
});
