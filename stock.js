const maxProfit = function (k, prices) {
  const len = prices.length;
  if (!k || len < 2) {
    return 0;
  }
  const dp = [...new Array(len)].map(() => new Array(k * 2 + 1).fill(0));

  for (let i = 1; i < k * 2; i += 2) {
    dp[0][i] = -prices[0];
  }
  for (let i = 1; i < len; i += 1) {
    for (let j = 0; j < k * 2; j += 2) {
      dp[i][j + 1] = Math.max(dp[i - 1][j + 1], dp[i - 1][j] - prices[i]);
      dp[i][j + 2] = Math.max(dp[i - 1][j + 2], dp[i - 1][j + 1] + prices[i]);
    }
  }

  return Math.max(...dp[len - 1]);
};
console.log(maxProfit(2, [3, 2, 6, 5, 0, 3]));
