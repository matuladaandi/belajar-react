const person = {
  firstName: "andi",
  lastName: "matu",
  adrress: {
    street: "Jl. Sumbawa",
    city: "Dompu",
    country: "Indonesia",
  },
  hobby: "Coding",
  hp: "infinix",
};

// const fN = person.firstName  ⁡⁢⁣⁢access object without destructuring⁡
// console.log(fN);
// expected : andi

//** Acces Object use Destructuring */
const { firstName, lastName, adrress, ...otherx } = person;

console.log(firstName);
// expected: andi

console.log(adrress);
console.log(otherx);
