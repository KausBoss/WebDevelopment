// function delay(f){
//     let x= new Date().getTime()
//     while(new Date().getTime() < 3000+x){
//     }
//     f()
// }

function f(){
    console.log("one sec has passed")
}

// delay(f)

setTimeout(function(){
    f()
}, 5000)

setInterval(function() {
    console.log('it is runnig')
}, 5000);