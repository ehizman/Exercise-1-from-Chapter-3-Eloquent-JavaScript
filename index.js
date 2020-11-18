/* write a function "min" that takes 2 arguments and returns their minimum*/

function min (a,b) {
  if (a < b) {
    return a;
  }
  else {
    return b;
  }
}

let x= Number(prompt ('Enter first number '));
let y = Number(prompt ('Enter second number '));
console.log("the minimum between " + x + ' and ' + y + ' is ' + min(x,y) );