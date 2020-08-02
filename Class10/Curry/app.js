function add(x) {
	if (!x) {
		return x;
	}
	function addMore(res) {
		if (!res) {
			res = 0;
			return x;
		}
		x += res;
		return addMore;
	}
	return addMore;
}

console.log(add(1)(2)(3)(4)(5)(6)(7)(8)(9)());
console.log(add(1)(2)(3)(4)(5)(6)(7)(8)());
console.log(add(1)(2)(3)(4)(5)(6)(7)());
console.log(add(1)(2)(3)(4)(5)(6)());
console.log(add(1)(2)(3)(4)(5)());
