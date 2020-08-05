const fs = require('fs');
const path = require('path');
const F1 = path.join(__dirname, 'inp1.txt');
const F2 = path.join(__dirname, 'inp2.txt');
const F3 = path.join(__dirname, 'output.txt');
let ans;

fs.readFile(F1, (err, data) => {
	if (err) throw err;
	ans = data.toString().split('\n');
	fs.readFile(F2, (err, data) => {
		if (err) throw err;

		ans = ans.concat(data.toString().split('\n'));
		ans.sort((a, b) => a - b);

		let finalAns = ans.join('\n');

		fs.writeFile(F3, finalAns, (err) => {
			if (err) throw err;
			console.log('everything done');
		});
	});
});
