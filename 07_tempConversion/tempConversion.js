const convertToCelsius = function(inputTemp) {
  return +((inputTemp - 32) * 5 / 9).toFixed(1); //tofixed returns a string, use + to conver to number
  //could have also multiplied by 10, rounded it, and then divided by 10
};

const convertToFahrenheit = function(inputTemp) {

return +((9/5 * inputTemp) + 32).toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
