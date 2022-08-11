const bestSumTab = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(null);
  table[0] = [];
  for (let i = 0; i <= targetSum; i++) {
    if (table[i] != null) {
      for (n of numbers) {
        const combination = [...table[i], n];
        if (!table[i + n] || table[i + n].length > combination.length)
          table[i + n] = combination;
      }
    }
  }
  return table[targetSum];
};
console.log(bestSumTab(100, [2, 3, 5, 25, 50]));
