const square = function(x) {
	return x * x;
}

const squareArrow = x => x * x;

console.log(squareArrow(8));

const getFirstName = fullName => fullName.split(' ')[0];

console.log(getFirstName('Mehmet Sonmezates'));

const add = (a, b) => {
	// console.log(arguments); //We don't have access to arguments with arrow functions, only es5 functions
	return a + b;
}

console.log(add(1,2,3));


// this keyword - no longer bound

const user = {
	name: 'Mehmet',
	cities: ['Austin','Dallas','Houston'],
	printPlacesLived() {
		
		return this.cities.map(city => this.name +  ' has lived in ' + city)

		// this.cities.forEach((city) => {
		// 	console.log(this.name + ' has lived in ' + city);
		// });
	}
};

console.log(user.printPlacesLived());



const multiplier = {
	numbers: [1,2,3],
	multiplyBy: 2,
	multiply() {
		return this.numbers.map(num => num * this.multiplyBy);
	}
};

console.log(multiplier.multiply());