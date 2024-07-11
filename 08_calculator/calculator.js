const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
	return arr.reduce((total, current) => {
    return total + current;
  }, 0);
};

const multiply = function(arr) {
  return arr.reduce((product, current) => {
    return product * current;
  }, 1);
};

const power = function(a, b) {
  let answer = 1;
  for (let i = 0; i < b; i++) {
    answer *= a;
  }
  return answer;
};

const factorial = function(a) {
  if (a === 0) return 1;
  let answer = 1;
  for (let i = a; i > 0; i--) {
    answer *= i;
  }
  return answer;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
