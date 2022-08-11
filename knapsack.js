const findKnap = (weights, price, capacity) => {
  const knapsack = Array(capacity + 1).fill(0);
  const sumofWeights = weights.reduce((a, b) => a + b);
  if (sumofWeights <= capacity) return price.reduce((a, b) => a + b);
  for (let i = 1; i <= weights.length; i++) {
    const weight = weights[i - 1];
    for (let j = capacity; j >= 0; j--) {
      if (weight <= j)
        knapsack[j] = Math.max(
          knapsack[j],
          knapsack[j - weight] + price[i - 1]
        );
    }
  }
  //   console.log(knapsack);
  return knapsack[capacity];
};
const weights = [2, 4, 1, 3];
const price = [80, 50, 60, 100];
const capacity = 5;
console.log(findKnap(weights, price, capacity));
