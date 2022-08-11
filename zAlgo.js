const searchPattern = (text, arr) => {
  let left = 0;
  let right = 0;
  let len = text.length;
  for (let k = 1; k < len; k++) {
    //Check if k greater than right if right is greater then it have found a pattern that is greater than 1
    if (k > right) {
      left = right = k;
      while (right < len && text[right] == text[right - left]) right++;
      arr[k] = right - left;
      right--;
    } else {
      let k1 = k - left;
      if (arr[k1] < right - k - 1) z[k] = z[k1];
      else {
        left = k;
        while (right < len && text[right] == text[right - left]) left++;
        arr[k] = right - left;
        right--;
      }
    }
  }
  return arr;
};
const string = "faabbcdeffghiaaabbcdfgaabf";
const pattern = "aabb";
const text = `${pattern}#${string}`;
let arr = [];
arr.push(0);
arr = searchPattern(text, arr);
for (let i = 0; i < arr.length; i++) {
  if (arr[i] == pattern.length) {
    const pos = i - pattern.length - 1;
    console.log(`Pattern found at index: ${pos}`);
  }
}
console.log(arr);
