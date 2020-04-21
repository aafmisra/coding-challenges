// create a function, sumNum, that adds up every number between a number, num, and 1 inclusive

//iterative

function sumNum(num) {
  let sum = 0;
  for (let i = num; i >= 1; i--) {
    sum += i;
  }
  return sum;
}

console.log(sumNum(3));
