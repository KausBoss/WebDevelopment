//Map
// it uses a hash function to map each element to a specific index in final array
//(value, index, array)
let arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

let arr2 = arr.map((i) => i * i);
let arr3 = arr.map((i) => i ** 3);

console.log(arr);

console.log(arr2);

console.log(arr3);

arr.map((i, indx, arr) => {
	console.log(indx);
	console.log(arr);
});

//Filter - (boolean)
// if true-> value changed else not left aside

console.log(arr);

arr = arr.filter((i) => {
	return i % 2 == 0;
});

console.log(arr);

//Reduce
//Reduce array to a single value
//eg - sum, product
//arr.reduce((accum, value)=>)

arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

let sum = arr.reduce((accum, val, indx, A) => {
	console.log(indx);
	console.log(A[indx]);
	return accum + val;
});

console.log(sum);

let B = [ 1, 31, 114, 22, 65, 17, 38, 54, 41 ];

B.sort((a, b) => a - b);
//for descending write b-a
// It uses insertion sort for bsmall array
// ans uses merge sort for large arrays

console.log(B);

arr.forEach((val) => {
	console.log(val + 1);
});

//All these functions are available at Array.Prototype
