// (x) wrapping a function
//use semi-colon before and after
let name = 'Tripathi';

!(function func(name) {
	console.log(`Hello Kaus ${name}`);
})(name);

//another example of IIFE
!(function calculate(x) {
	console.log(`Sqrt of ${x}:`, Math.sqrt(x));
})(81);
