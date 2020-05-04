function strSearch(str, pattern) {
  let matches = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < pattern.length; j++) {
      if (str[i + j] !== pattern[j]) {
        break;
      }
      if (j === pattern.length - 1) {
        matches++;
      }
    }
  }
  return matches;
}

console.log(strSearch("omg im so so hungry", "so"))
