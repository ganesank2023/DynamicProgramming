const canSumTab = (n, array) => {
  //   console.log("runninfg");
  const table = Array(n + 1).fill(false);
  //   console.log(table);
  table[0] = true;
  for (let i = 0; i <= n; i++) {
    if (table[i]) {
      for (let num of array) {
        table[i + num] = true;
      }
    }
  }
  //   console.log(table);
  return table[n];
};
console.log(canSumTab(300, [7, 14]));
