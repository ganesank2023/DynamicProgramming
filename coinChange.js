var coinChange = function (coins, amount, memo = {}) {
  if (amount in memo) return memo[amount];
  if (amount == 0) return [];
  if (amount < 0) return null;
  let shortestCombination = null;
  for (let num of coins) {
    const remainder = amount - num;
    const remainderCombination = coinChange(coins, remainder, memo);
    if (remainderCombination != null) {
      // console.log(remainderCombination);
      const combination = [...remainderCombination, num];
      if (
        shortestCombination === null ||
        combination.length < shortestCombination.length
      )
        shortestCombination = combination;
    }
  }
  memo[amount] = shortestCombination;
  return shortestCombination;
};
console.log(coinChange([1, 2, 5], 11));
