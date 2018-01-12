'use strict';

var square = function square(x) {
	return x * x;
};

var squareArrow = function squareArrow(x) {
	return x * x;
};

console.log(squareArrow(8));

var getFirstName = function getFirstName(fullName) {
	return fullName.split(' ')[0];
};

console.log(getFirstName('Mehmet Sonmezates'));

var add = function add(a, b) {
	// console.log(arguments); //We don't have access to arguments with arrow functions, only es5 functions
	return a + b;
};

console.log(add(1, 2, 3));

// this keyword - no longer bound

var user = {
	name: 'Mehmet',
	cities: ['Austin', 'Dallas', 'Houston'],
	printPlacesLived: function printPlacesLived() {
		var _this = this;

		return this.cities.map(function (city) {
			return _this.name + ' has lived in ' + city;
		});

		// this.cities.forEach((city) => {
		// 	console.log(this.name + ' has lived in ' + city);
		// });
	}
};

console.log(user.printPlacesLived());

var multiplier = {
	numbers: [1, 2, 3],
	multiplyBy: 2,
	multiply: function multiply() {
		var _this2 = this;

		return this.numbers.map(function (num) {
			return num * _this2.multiplyBy;
		});
	}
};

console.log(multiplier.multiply());
