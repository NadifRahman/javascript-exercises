const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	 return a - b;
};

const sum = function(a) {
  
	 let result = a.reduce((sum, element) => sum + element, 0);
   return result;

};

const multiply = function(a) {
  return a.reduce((product, current) => product * current);
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(a) {
	
  if (a <= 1) {
    return 1;
  }
  else {
    return a * factorial(a-1);
  }
  
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
