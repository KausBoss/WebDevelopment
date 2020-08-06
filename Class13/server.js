const express = require('express');
const server = express();

server.listen(4444, () => {
	console.log('Server started at http://localhost:4444');
});
