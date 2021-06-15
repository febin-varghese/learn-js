/*
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

If the input array is empty or null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/
function countPositivesSumNegatives(input) {
    var count = [0, 0];
    for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
        var n = input_1[_i];
        if (n > 0)
            count[0]++;
        else
            count[1] += n;
    }
    return count;
}
console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
