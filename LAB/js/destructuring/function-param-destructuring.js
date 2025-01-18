//** Use Destructuring */
function displayPerson({ firstName, lastName }) {
  console.info(firstName);
  // expected: andi

  console.info(lastName);
  // expected: matulada
}

// ⁡⁢⁣⁢Without Destructuring⁡
// function displayPerson(person) {
//   console.info(person.firstName);
//   console.info(person.lastName);
// }

const person = {
  firstName: "andi",
  lastName: "matulada",
};

// Array
function sum([first, second]) {
  return first + second;
}

// ⁡⁢⁣⁢withour Destructuring array⁡
// function sum2(arr) {
//   return arr[0] + arr[1]
// }
// console.log(sum2([10,10]));
// expected: 20

displayPerson(person);

console.log(sum([10, 12]));
// expected: 22
