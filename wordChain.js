const findMax = (word, tempArr) => {
  // console.log(word);
  let ch = word[word.length - 1];
  const soln = [];
  for (let i = 0; i < tempArr.length; i++) {
    // const arr = tempArr;
    for (j = 0; j < tempArr.length; ) {
      // console.log(j);
      let str = tempArr[j];
      // console.log(str);
      if (str[0] == ch) {
        // console.log(str);
        // console.log(tempArr);
        soln.push(str);
        tempArr.splice(tempArr.indexOf(str), 1);
        let s = soln[soln.length - 1];
        ch = s[s.length - 1];
        j = 0;
        // console.log(s, tempArr.length, ch);
      } else j++;
    }
  }
  // console.log(soln);
  // console.log(tempArr);
  return soln;
};

const array = ["stone", "paper", "robos"];
let soln = [];

for (let word of array) {
  //   console.log(word);
  //   console.log(tempArr);
  let tempArr = array.slice();
  tempArr.splice(tempArr.indexOf(word), 1);
  let max = findMax(word, tempArr);
  if (soln.length < max.length) {
    max.unshift(word);
    soln = max;
  }
}
console.log(soln);
console.log(soln.length);
