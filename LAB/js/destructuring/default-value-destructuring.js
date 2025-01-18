//** Default Value Array */
const names = ["andi", "matulada"];

const [firstName, lastname, callName = "brow"] = names;
console.log(firstName);
// expected: andi

console.log(lastname);
// expected:  matulada

// jika yg ke-3 tidak ada datanya maka akan diambil nilai defaultnya
console.log(callName);
// expected: brow

//** Object */
const book = {
  title: "Harry Potter",
  price: 100,
};

const { title, price, author = "J. K. Rowling" } = book;
console.log(title);
// expected: Harry Potter

console.log(author);
// expected: J. K. Rowling
