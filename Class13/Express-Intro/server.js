const express = require('express');
const server = express();

server.get('/', (req, res) => {
	res.send('Local host kia hai');
});

server.get('/hi', (req, res) => {
	res.send(`Ye hi wala link hai ${req.query.q} ${req.query.s}`);
});

server.listen(4444, () => {
	console.log('Server start ho chuka hai');
});
