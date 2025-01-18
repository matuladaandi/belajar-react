// callback biasanya dibuat dlm bentuk function as parameter, dan parameter function tersebut akan di eksekusi saat proses Async selesai.

//** SetTimeout */

// dalam 3s akan memanggil callback function yaitu sayHello()
const sayHello = () => {
  console.log("Call Hallo Brow in 2s");
};

setTimeout(sayHello, 2000); // 2000 ms = 2s atau 2 detik
// expected: print "Call Hallo Brow in 3s"

// console.log('first');

// ** SetInterval */

const displayTime = () => {
  const now = new Date(); // time now

  //   Format jam,menit, dan detik menjadi 2 digit
  //   Jika angka kurang dari 2 digit (seperti 9), otomatis menambahkan 0 di depannya (menjadi 09).
  const h = now.getHours().toString().padStart(2, "0");
  const m = now.getMinutes().toString().padStart(2, "0");
  const s = now.getSeconds().toString().padStart(2, "0");

  // Gabungkan waktu dalam format HH:MM:SS
  console.log(`${h}:${m}:${s}`);
};

setInterval(displayTime, 1000);
