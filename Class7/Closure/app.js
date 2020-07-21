function func(){
    let x=0
    function inner(){
        x++;
        function innermost(){
            x++
            console.log(x)
        }
        return innermost
    }
    return inner;
}

let f1 = func()
let f2 = func()

let f11 = f1()
let f12 = f1()
let f21 = f2()
let f22 = f2()

f11()
f11()
f12()
f12()
f21()
f22()