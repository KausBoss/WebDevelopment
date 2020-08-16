const sqlite3 = require('sqlite3');
const db = new sqlite3.Database(__dirname + '/test.db');

db.serialize(() => {
	db.all(`SELECT * FROM tasks`, (err, rows) => {
		if (err) {
			throw err;
		}
		for (let i of rows) {
			console.log(i);
		}
	});
});
