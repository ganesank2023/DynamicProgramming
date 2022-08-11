const bestSum = (num, array) => {
  if (num === 0) return [];
  if (num < 0) return null;
  let shortestCombination = null;

  for (let n of array) {
    const remainder = num - n;
    const remainderCombination = bestSum(remainder, array);
    if (remainderCombination !== null) {
      const combination = [...remainderCombination, num];
      if (
        shortestCombination == null ||
        combination.length < shortestCombination.length
      ) {
        shortestCombination = combination;
      }
    }
  }
  return shortestCombination;
};
console.log(bestSum(5, [1, 2, 3, 4, 5]));
