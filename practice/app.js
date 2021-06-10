// function pangram(phrase){
//     let alphabets = "abcdefghijklmnopqrstuvwxyz";
//     for(let i = 0; i< phrase.length; i++){
//         let currentChar = phrase.charAt(i).toLowerCase();
//         if(alphabets.includes(currentChar)){
//             alphabets = alphabets.replace(currentChar, "");
//         }
//     }
//     return alphabets == "";    
// }

// console.log(pangram("abcdefghjklmnopqrstuvwxyz"));


// function descendingOrder(n){
//     return n ? parseInt(n.toString().split("").sort().reverse().join("")) : n;
// }

// console.log(descendingOrder(1201));



// function findOdd(xs){
//     let countObject = {};
//     for(let i=0; i<xs.length; i++){
//         let num = xs[i];
//         countObject[num] = countObject[num] ? countObject[num] + 1 : 1;
//     }
//     console.log(countObject);
//     for(let key in countObject){
//         if(countObject[key] % 2) return key;
//     }
// }

// console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]))


// let val = "123a4"
// let isnum = /^\d+$/.test(val);
// console.log(isnum);



