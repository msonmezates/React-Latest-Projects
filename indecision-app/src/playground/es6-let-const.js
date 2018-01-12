var nameVar = 'Andrew';
var nameVar = 'Mike';

console.log('nameVar', nameVar);

let nameLet = 'Julie';
nameLet = 'Jenna';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

// function getPetName() {
// 	let petName = 'Minik';
// 	return petName;
// }

// console.log(petName); //No access 

//block scoping

var fullName = 'Mehmet Sonmezates';

// if(fullName) {
// 	var firstName = fullName.split(' ')[0];
// 	console.log(firstName);
// }

// console.log(firstName);

if(fullName) {
	let firstName = fullName.split(' ')[0];
	console.log(firstName);
}

console.log(firstName);