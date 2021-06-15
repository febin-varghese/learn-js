function chessBoardCellColor(cell1, cell2) {
    // same: black, different: white
    var xAxis = {
        'A': 0, 'B': 1, 'C': 0, 'D': 1, 'E': 0, 'F': 1, 'G': 0, 'H': 1
    };
    var yAxis = [0, 1, 0, 1, 0, 1, 0, 1];
    var firstColor = xAxis[cell1.charAt(0)] == yAxis[parseInt(cell1.charAt(1)) - 1] ? "black" : "white";
    var secondColor = xAxis[cell2.charAt(0)] == yAxis[parseInt(cell2.charAt(1)) - 1] ? "black" : "white";
    return firstColor === secondColor;
}
console.log(chessBoardCellColor('A1', 'C3'));
console.log(chessBoardCellColor('A1', 'H3'));
console.log(chessBoardCellColor('A1', 'A2'));
