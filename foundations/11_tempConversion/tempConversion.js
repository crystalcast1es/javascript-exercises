const convertToCelsius = function(degreeFahrenheit) {
  return +((degreeFahrenheit-32)*(5/9)).toFixed(1);
};

const convertToFahrenheit = function(degreeCelsius) {
  return +((9/5)*degreeCelsius + 32).toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
