const howSum = (num, array) => {
  if (num == 0) return [];
  if (num < 0) return null;

  for (let n of array) {
    const remainder = num - n;
    const remainderResult = howSum(remainder, array);
    if (remainderResult !== null) return [...remainderResult, n];
  }
  return null;
};
console.log(howSum(7, [2, 3, 4, 5]));
