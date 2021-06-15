/*
Bob is preparing to pass IQ test.
The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

! Keep in mind that your task is to help Bob solve a real IQ test,
which means indexes of the elements start from 1 (not 0)
example
iqTest("2 4 7 8 10") => 3 //
iqTest("1 2 1 1") => 2
*/
// function iqTest(numbers: string): number{
//     let numArray = numbers.split(" ").map(Number);
//     let oddArray = [];
//     let evenArray = [];
//     for(let i=0; i<numArray.length; i++){
//         if(numArray[i] % 2){
//             oddArray.push(i+1);
//         }
//         else{
//             evenArray.push(i+1);
//         }
//     }
//     if(oddArray.length == 1) return oddArray[0];
//     else return evenArray[0];
// }
function iqTest(numbers) {
    var evenness = numbers.split(' ').map(function (x) { return Number(x) % 2; });
    return evenness.reduce(function (a, b) { return a + b; }) == 1 ? evenness.indexOf(1) + 1 : evenness.indexOf(0) + 1;
}
console.log(iqTest("2 4 7 8 10"));
