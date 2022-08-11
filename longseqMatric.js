// const printMap = (dp) => console.log(dp);

var longestIncreasingPath = function (matrix) {
  let dp = new Array(matrix.length)
    .fill([])
    .map(() => new Array(matrix[0].length).fill(undefined));
  let max = 0;
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      max = Math.max(max, dfs(matrix, r, c, 0, dp));
    }
  }
  //   printMap(dp);
  return max;
};

function dfs(m, r, c, max, dp, prv) {
  if (r < 0 || r >= m.length || c < 0 || c >= m[0].length) return max;
  let curr = m[r][c];
  if (prv !== undefined && prv >= curr) return max;
  if (dp[r][c] !== undefined) return dp[r][c] + max;
  curr = m[r][c];
  max = Math.max(
    1 + dfs(m, r - 1, c, max, dp, curr),
    1 + dfs(m, r + 1, c, max, dp, curr),
    1 + dfs(m, r, c - 1, max, dp, curr),
    1 + dfs(m, r, c + 1, max, dp, curr)
  );
  dp[r][c] = max;
  return max;
}

const matrix = [
  [9, 8, 4, 5, 6],
  [6, 7, 3, 2, 1],
  [5, 6, 4, 1, 3],
  [4, 5, 4, 3, 7],
  [2, 0, 3, 2, 1],
];

console.log(longestIncreasingPath(matrix));
