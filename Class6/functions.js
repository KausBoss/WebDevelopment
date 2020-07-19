function add(a, b){
    console.log(a+b)
    return a+b
}

add(10, 19)

console.log(typeof add)

let fun = function(a, b=10){
    console.log(a-b)
    return a-b
}

fun(17, 7);