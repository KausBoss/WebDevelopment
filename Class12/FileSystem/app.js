const fs = require('fs');
const path = require('path');
let data = 'Hello this is file system\n';

fs.writeFile(
	path.join(__dirname, 'abc.txt'),
	data,
	{
		encoding: 'utf8',
		flag: 'a'
	},
	(err) => {
		if (err) throw err;
		console.log('done Successfully');
	}
);

fs.readFile(
	path.join(__dirname, 'abc.txt'),
	{
		encoding: 'utf8'
	},
	(err, data) => {
		if (err) throw err;
		console.log(data);
	}
);
