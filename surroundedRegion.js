const flipSurrounded = (board, n) => {
  if (board == null || board.length == 0) return;
  let row = board.length - 1;
  let colum = board[0].length - 1;
  for (let i = 0; i <= row; i++) {
    if (board[i][0] == "O") {
      dfs(i, 0);
    }
    if (board[i][colum] == "O") {
      dfs(i, colum);
    }
  }

  for (let j = 0; j <= colum; j++) {
    if (board[0][j] == "O") {
      dfs(0, j);
    }
    if (board[row][j] == "O") {
      dfs(row, j);
    }
  }

  function dfs(i, j) {
    if (
      i < 0 ||
      i >= board.length ||
      j < 0 ||
      j >= board[0].length ||
      board[i][j] != "O"
    ) {
      return;
    }
    board[i][j] = "Y";
    dfs(i - 1, j);
    dfs(i + 1, j);
    dfs(i, j - 1);
    dfs(i, j + 1);
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] == "O") {
        board[i][j] = "X";
      }

      if (board[i][j] == "Y") {
        board[i][j] = "O";
      }
    }
  }
  return board;
};
const board = [
  ["X", "X", "X", "X"],
  ["X", "O", "O", "O"],
  ["X", "X", "O", "X"],
  ["X", "O", "X", "X"],
];
console.log(flipSurrounded(board, 5));
