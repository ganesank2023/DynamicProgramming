const buildSequence = (array, sequence, currentIdx) => {
  const soln = [];
  while (currentIdx != null) {
    soln.push(array[currentIdx]);
    currentIdx = sequence[currentIdx];
  }
  return soln.reverse();
};

const longestIncreasingSubsequence = (array) => {
  const n = array.length;
  const length = Array(n).fill(1);
  const sequence = Array(n).fill(null);
  let maxLength = 0;
  for (let i = 0; i < n; i++) {
    const currentNum = array[i];
    for (let j = 0; j < i; j++) {
      const otherNum = array[j];
      if (otherNum < currentNum && length[j] + 1 >= length[i]) {
        length[i] = length[j] + 1;
        sequence[i] = j;
      }
    }
    if (length[i] >= length[maxLength]) maxLength = i;
  }
  return buildSequence(array, sequence, maxLength);
};
console.log(
  longestIncreasingSubsequence([5, 7, -24, 12, 10, 2, 3, 12, 5, 6, 35])
);
console.log(longestIncreasingSubsequence([0, 5, 4, 3, 2, 1]));
console.log(longestIncreasingSubsequence([1, 2, 3, 4, 5]));
console.log(longestIncreasingSubsequence([1, 1, 1, 1, 1]));
// console.log(
//   longestIncreasingSubsequence([5, 7, -24, 12, 10, 2, 3, 12, 5, 6, 35])
// );
