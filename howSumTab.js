const howSumTab = (targetSum, values) => {
  const table = Array(targetSum + 1).fill(null);
  table[0] = [];
  for (let i = 0; i <= targetSum; i++) {
    if (table[i] !== null) {
      for (let n of values) {
        table[i + n] = [...table[i], n];
      }
    }
  }
  return table[targetSum];
};
console.log(howSumTab(7, [4, 3, 2, 5]));
