/*
 Reverse an array, return the result. Do whatever you want with the original array. Don't use Array.prototype.reverse.

You have 47 bytes to spare.

Example: [1, 2, 3] → [3, 2, 1]
*/

const reverse=(a:any[])=>a.map(a.pop,[...a])
// const reverse=(a:any[])=>a.map((i,j)=>a[a.length-1-j])

// console.log(reverse([1, 2, 3]));
let a = [1, 2, 3, 4]
console.log(a[0]);
// console.log([...[1234]]);
