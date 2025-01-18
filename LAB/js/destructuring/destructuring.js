const names = ["andi", "matu", "end", "x", "y", "z"];

// const names = ['andi','matu','end']
// console.log(names[0]); // ⁡⁢⁣⁢Access data on array one by one use manual⁡
// expected : andi

//** ⁡⁣⁣use destructuring Array */
// ...others adalah rest param yg akan menampung data dlm bentuk array
const [firstName, middleName, lastName, ...others] = names;
console.log(firstName);
// expected : andi

console.log(others);
// expected : [x,y,z]
