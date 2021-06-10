// const findOdd = (xs: number[]): number => {
//     // happy coding!
//     return xs.reduce( (a,b)=> a^b);
//   };

// // console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]));  

// // console.log([1, 2, 3].reduce((a, b) => a^b));
// console.log(20^1);



// function digPow(n: number, p: number): number {
//   let digits = n.toString().split("").map(Number);
//   let sum = 0;
//   for(const d of digits){
//     sum += d**p;
//     p++;
//   }
//   return !(sum % n) ? sum/n : -1;
// }

// console.log(digPow(89, 1));
// console.log(digPow(92, 1));
// console.log(digPow(114, 3));



// function xo(str: string): boolean{
//   // i for case insensitive, g for global
//   let xCount = (str.match(/x/ig) || []).length;// + (str.match(/X/g) || []).length;
//   let oCount = (str.match(/o/ig) || []).length;// + (str.match(/O/g) || []).length;
//   return xCount == oCount;
// }

// console.log(xo("ooxXm"));



function reverseElement(str: string): string{
  return str.split("").reverse().join("");
}

function reverseWord(str: string): string{
  return str.split(" ").map(reverseElement).join(" ");
}

console.log(reverseWord("double  spaces"));