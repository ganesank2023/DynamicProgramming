//Other ways using flat() with inifinty params
//._flattenDeep
function* flatten(arr) {
  for (const val of arr) {
    Array.isArray(val) ? yield* flatten(val) : yield val;
  }
}

const arr = [
  [1, 2],
  [3, [4, [5]]],
];

const flattened = [...flatten(arr)];
console.log(flattened);

//Zip object
const zipObject = (keys, values) =>
  keys.reduce((acc, key, idx) => {
    // console.log(`${key}::${idx}`);
    acc[key] = values[idx];
    // console.log(acc);
    return acc;
  }, {});

const obj = zipObject(["a", "b"], [1, 2]);
console.log(obj);

//collection for each right
const forEachRight = (array, iteratee) =>
  [...array].reverse().forEach((val, index) => {
    iteratee(val, array.length - 1 - index, array);
  });

const array = ["a", "b", "c"];

forEachRight(array, (item, index) => {
  console.log(item, index);
});

//Utility func attempt

const attempt = (func, ...args) => {
  try {
    return func(...args);
  } catch (e) {
    return e;
  }
};

console.log(attempt((item) => item.split(""), "string"));

console.log(attempt((item) => item.split(""), 1));

//Trim start
const trimStart = (str, c = "\\s") =>
  str.replace(new RegExp(`^([${c}]*)(.*)$`), "$2");

console.log(trimStart(" abc "));
// => 'abc '`

console.log(trimStart("-_-abc-_-", "_-"));
// => 'abc-_-'
