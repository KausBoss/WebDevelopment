//DOM manipulation takes time
// touch DOM as less as possible
const inp = document.getElementById('inp');
const list = document.getElementById('list');
const btn = document.getElementById('btn');

btn.onclick = function() {
	let x = inp.value;
	x = parseInt(x);
	// list.innerHTML = '';
	// let t = '';
	for (let i = 1; i <= x; i++) {
		let str = '';
		if (i % 3 == 0) {
			str += 'Fizz';
		}
		if (i % 5 == 0) {
			str += 'Buzz';
		}
		if (str == '') {
			str += i;
		}
		let li = document.createElement('li');
		li.innerText = str;
		list.appendChild(li);
	}
	// list.innerHTML += t;
};
