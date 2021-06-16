// Leetcode challenges
// https://leetcode.com/problems/two-sum/
// function twoSum(nums: number[], target: number): number[] {
//     for(let i=0; i<nums.length; i++)
//         for(let j=i+1; j<nums.length; j++)
//             if(nums[i]+nums[j] == target) return [i, j];
//     return [];
// };
// https://leetcode.com/problems/reverse-integer/
// function revers(x: number): number {
//     let xReverse = parseInt(x.toString().split('').reverse().join(''));
//     return xReverse > 2**31 - 1 ? 0 : x < 0? 0-xReverse: xReverse;
// };
// console.log(revers(-123));
// https://leetcode.com/problems/palindrome-number/
// function isPalindrome(x: number): boolean {
//     return x.toString() == x.toString().split('').reverse().join('');
// };
// console.log(isPalindrome(101));
// https://leetcode.com/problems/roman-to-integer/
function romanToInt(s) {
    var conversion = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
    var numeric = 0;
    var currentVal;
    var nextVal;
    for (var i = 0; i < s.length; i++) {
        currentVal = conversion[s[i]];
        nextVal = conversion[s[i + 1]];
        currentVal < nextVal ? numeric -= currentVal : numeric += currentVal;
    }
    return numeric;
}
;
console.log(romanToInt('IV'));
console.log(romanToInt('VI'));
