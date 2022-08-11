const isNonAttackingPlacement = (row, col, columnPlacements) => {
  for (let previousRow = 0; previousRow < row; previousRow++) {
    let columnToCheck = columnPlacements[previousRow];
    let sameColumn = columnToCheck == col ? true : false;
    let onDiagonal =
      Math.abs(columnToCheck - col) == row - previousRow ? true : false;
    if (sameColumn || onDiagonal) return false;
  }
  return true;
};
const getNQP = (row, columnPlacements, boardSize) => {
  if (row == boardSize) return 1;
  let validPlacement = 0;
  for (let col = 0; col < boardSize; col++) {
    if (isNonAttackingPlacement(row, col, columnPlacements)) {
      columnPlacements[row] = col;
      validPlacement += getNQP(row + 1, columnPlacements, boardSize);
    }
  }
  return validPlacement;
};
function nonAttackingQueens(n) {
  const columnPlacements = Array(n).fill(0);
  return getNQP(0, columnPlacements, n);
}

console.log(nonAttackingQueens(4));
