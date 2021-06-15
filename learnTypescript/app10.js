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

// function longest(s1, s2) {
//     return Array.from(new Set((s1+s2))).sort().join('');
// }

// console.log(longest("aretheyhere", "yestheyarehere") === "aehrsty")
// console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding") === "abcdefghilnoprstu")
// console.log(longest("inmanylanguages", "theresapairoffunctions") === "acefghilmnoprstuy")



// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript

// function solution(str){
//     let strArray = [];
//     for(let i=0;i<str.length; i+=2){
//         i+1 < str.length ? strArray.push(str.slice(i, i+2)): strArray.push(str[i]+'_');
//     }
//     return strArray;
// }

// console.log(solution("abcdef"));
// console.log(solution("abcdefg"))



// https://www.codewars.com/kata/526571aae218b8ee490006f4/train/javascript

// function nBits(n){
//     // let x = n.toString(2).split('');
//     // let sum = 0;
//     // for(const num of x){
//     //     if(num === '1') sum++;
//     // }
//     // return sum;
//     return n.toString(2).split('0').join('').length;
// }

// console.log(nBits(10));



// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript
// function high(x){
//     let words = x.split(' ');
//     let count = words.map(w=>[...w].reduce((acc, e)=> acc+e.charCodeAt(0)-96, 0))
//     //     let sum = 0;
//     //     for(let i=0; i<w.length; i++){
//     //         sum += w.charCodeAt(i)-96;
//     //     }
//     //     return sum
//     // })
//     return words[count.indexOf(Math.max(...count))]
// }

// console.log(high('man i need a taxi up to ubud'));



// https://www.codewars.com/kata/530e15517bc88ac656000716/train/javascript

// function rot13(message){
//     return message.replace(/[a-zA-Z]/g,function(c){
//         return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);
//     });
// }

// console.log(rot13('test'));



// https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/train/javascript

function maxSequence(arr){
    if(arr === undefined || arr.length == 0 || ! arr.some(a=> a>=0)) return 0;
    if(! arr.some(a=> a<0)){
        return arr.reduce((a, b)=>a+b, 0);
    }
    let maxTillNow = 0;
    let maxEnd = 0;
    for(let i=0;i<arr.length; i++){
        maxEnd += arr[i];
        if(maxTillNow < maxEnd)
            maxTillNow = maxEnd;
        maxEnd = maxEnd < 0 ? 0 : maxEnd
    }
    return maxTillNow;
}
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6