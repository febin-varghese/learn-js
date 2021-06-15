/* create NxN multiplication table, of size provided in parameter.

for example, when given size is 3:
1 2 3
2 4 6
3 6 9
*/

function multiplicationTable(size: number): number[][]{
    let table: number[][] = [[]];
    for(let i = 1; i<=size; i++){
        table[i-1] = [];
        for(let j=1; j<=size; j++){
            table[i-1].push(i*j)
        }
    }
    return table;
}

console.log(multiplicationTable(3));
console.log([...Array(3)].map((_, i) => [...Array(3)].map((_, j) => (i + 1) * (j + 1))));