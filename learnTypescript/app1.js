/*
 Reverse an array, return the result. Do whatever you want with the original array. Don't use Array.prototype.reverse.

You have 47 bytes to spare.

Example: [1, 2, 3] → [3, 2, 1]
*/
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var reverse = function (a) { return a.map(a.pop, __spreadArray([], a)); };
// const reverse=(a:any[])=>a.map((i,j)=>a[a.length-1-j])
// console.log(reverse([1, 2, 3]));
var a = [1, 2, 3, 4];
console.log(a[0]);
// console.log([...[1234]]);
