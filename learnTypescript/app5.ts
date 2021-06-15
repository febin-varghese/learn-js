function chessBoardCellColor(cell1: string, cell2: string): boolean{
    // same: black, different: white
    let xAxis: {[name: string]: number} = {
        'A': 0, 'B': 1, 'C': 0, 'D': 1, 'E': 0, 'F': 1, 'G': 0, 'H':1
    }
    let yAxis = [0, 1, 0, 1, 0, 1, 0, 1];
    let firstColor: string = xAxis[cell1.charAt(0)] == yAxis[parseInt(cell1.charAt(1))-1] ? "black": "white";
    let secondColor: string = xAxis[cell2.charAt(0)] == yAxis[parseInt(cell2.charAt(1))-1] ? "black": "white";
    return firstColor === secondColor;
}

console.log(chessBoardCellColor('A1', 'C3'));
console.log(chessBoardCellColor('A1', 'H3'));
console.log(chessBoardCellColor('A1', 'A2'));