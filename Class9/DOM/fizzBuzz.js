//DOM manipulation takes time
// touch DOM as less as possible
const inp = document.getElementById('inp');
const list = document.getElementById('list');
const btn = document.getElementById('btn');

btn.onclick = function() {
	let x = inp.value;
	x = parseInt(x);
	// list.innerHTML = '';
	let t = '';
	for (let i = 1; i <= x; i++) {
		if (i % 15 == 0) {
			t += '<li>FizzBuzz</li>';
		} else if (i % 3 == 0) {
			t += '<li>Fizz</li>';
		} else if (i % 5 == 0) {
			t += '<li>Buzz</li>';
		} else {
			t += `<li>${i}</li>`;
		}
	}
	list.innerHTML += t;
};
