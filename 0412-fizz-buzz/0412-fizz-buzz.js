/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
let spy=[]

for(let i=1;i<=n;i++){
    if(i% 3===0 && i% 5===0){
        spy.push("FizzBuzz")
    }else if(i% 3===0){
        spy.push("Fizz")
    }else if(i% 5===0){
        spy.push("Buzz")
    }else {
       spy.push(i.toString())
    }
    
}
return spy;
}