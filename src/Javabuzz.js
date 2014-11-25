function Javabuzz() {};

// Javabuzz.prototype.isDivisibleByThree = function(number) {
//   return (number % 3 === 0);
// };

// Javabuzz.prototype.isDivisibleByFive = function(number) {
//   return (number % 5 === 0);
// };

// Javabuzz.prototype.isDivisibleByFifteen = function(number) {
//   return (number % 15 === 0);
// };

Javabuzz.prototype.isDivisibleBy = function(number, divisor) {
  return (number % divisor === 0);
};

Javabuzz.prototype._isDivisibleByThree = function(number) {
  return this._isDivisibleBy(number, 3);
};

Javabuzz.prototype._isDivisibleByFive = function(number) {
  return this._isDivisibleBy(number, 5);
};

Javabuzz.prototype._isDivisibleByFifteen = function(number) {
  return this._isDivisibleBy(number, 15);
};