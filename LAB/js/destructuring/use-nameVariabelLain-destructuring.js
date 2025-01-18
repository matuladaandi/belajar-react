//** Object */
// untuk array diubah aja konsepnya mirip
const book = {
  title: "Harry Potter",
  price: 100,
};

const { title: judul, price: harga, author: penulis = "J. K. Rowling" } = book;

console.log(judul);
// expected: Harry Potter

console.log(penulis);
// expected: J. K. Rowling