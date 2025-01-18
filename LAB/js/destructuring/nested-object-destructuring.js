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

const {
  firstName,
  lastName,
  adrress: { street, city, country },
  ...otherx
} = person;

console.log(firstName);
// expected : andi

console.log(city);
// expected : Dompu

// console.log(adrress);  ERROR