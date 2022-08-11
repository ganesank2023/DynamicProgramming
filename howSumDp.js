const howSum = (sum, array, memo = {}) => {
  if (sum in memo) return memo[sum];
  if (sum == 0) return [];
  if (sum < 0) return null;
  for (let n of array) {
    const remainder = sum - n;
    const remainderResult = howSum(remainder, array, memo);
    if (remainderResult != null) {
      memo[sum] = [...remainderResult, n];
      return memo[sum];
    }
  }
  memo[sum] = null;
  return null;
};
console.log(howSum(7, [2, 3, 4, 5]));
