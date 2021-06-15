// function narcissistic(value) {
//     let digits = Array.from(String(value), Number);
//     return value === digits.reduce((acc, curValue)=>acc+curValue**digits.length, 0);
// }

// console.log(narcissistic(7));
// console.log(narcissistic(371));



function squareDigits(num){
    let digits = Array.from(String(num), Number);
    let value = digits.reduce((acc, curVal)=>""+acc+curVal**2, 0);
    return parseInt(value);    
}

console.log(squareDigits(3212));
console.log(squareDigits(2112));
console.log(squareDigits(0));
