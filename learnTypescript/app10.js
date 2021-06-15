// https://www.codewars.com/kata/556deca17c58da83c00002db/train/javascript

// function tribonacci(signature,n){
//     // if(n === 0) return [];
//     for(let i =3; i<n; i++)
//     {
//         signature.push(signature[i-1] + signature[i-2] + signature[i-3]);
//     }
//     return signature.slice(0, n);
// }

// console.log(tribonacci([1, 1, 1], 10));




// https://www.codewars.com/kata/5592e3bd57b64d00f3000047/train/javascript

// function findNb(m){
//     // sum of cube of n natural numbers, sum = (n*(n+1)/2)^2
//     // sum = m, solve for n
//     let root = 2 * Math.sqrt(m);
//     let n = Math.round((-1 + Math.sqrt(4*root)) / 2)
//     return Math.pow(n*(n+1)/2, 2) === m ? n: -1;
// }


// console.log(findNb(4183059834009) === 2022)
// console.log(findNb(24723578342962) === -1)
// console.log(findNb(135440716410000) === 4824)
// console.log(findNb(40539911473216) === 3568)



// https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript

function longest(s1, s2) {
    return Array.from(new Set((s1+s2))).sort().join('');
}

console.log(longest("aretheyhere", "yestheyarehere") === "aehrsty")
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding") === "abcdefghilnoprstu")
console.log(longest("inmanylanguages", "theresapairoffunctions") === "acefghilmnoprstuy")