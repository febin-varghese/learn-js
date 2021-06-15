/*
A friend of mine takes the sequence of all numbers from 1 to n (where n > 0).
Within that sequence, he chooses two numbers, a and b.
He says that the product of a and b should be equal to the sum of all numbers in the sequence, excluding a and b.
Given a number n, could you tell me the numbers he excluded from the sequence?
The function takes the parameter: n (n is always strictly greater than 0) and returns an array or a string (depending on the language) of the form:
[(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or or [{a, b}, ...]
eg: removNb(26) should return [(15, 21), (21, 15)]
*/
function getTuple(a, b) {
    return [a, b];
}
function removeNb(n) {
    var sum = n * (n + 1) / 2;
    // b = (sum-1)/(a+1)
    var nArray = [];
    var b = 0;
    var a = 1;
    for (a = 1; a <= n; a++) {
        b = (sum - a) / (a + 1);
        if (b % 1 === 0 && b <= n) {
            nArray.push(getTuple(a, b));
        }
    }
    return nArray;
}
console.log(removeNb(26));
