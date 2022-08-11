const canSum = (n, arr, memo = {}) => {
  if (n in memo) return memo[n];
  if (n == 0) return true;
  if (n < 0) return false;
  for (let num of arr) {
    const remainder = n - num;
    if (canSum(remainder, arr, memo) === true) return true;
  }
  memo[n] = false;
  return false;
};
console.log(canSum(300, [7, 14]));
