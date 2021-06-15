/* create NxN multiplication table, of size provided in parameter.

for example, when given size is 3:
1 2 3
2 4 6
3 6 9
*/
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
function multiplicationTable(size) {
    var table = [[]];
    for (var i = 1; i <= size; i++) {
        table[i - 1] = [];
        for (var j = 1; j <= size; j++) {
            table[i - 1].push(i * j);
        }
    }
    return table;
}
console.log(multiplicationTable(3));
console.log(__spreadArray([], Array(3)).map(function (_, i) { return __spreadArray([], Array(3)).map(function (_, j) { return (i + 1) * (j + 1); }); }));
