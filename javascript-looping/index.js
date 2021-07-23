/*
1. Kita sudah mengetahui bahwa banyaknya user maksimal adalah 100.
Buat sebuah program yang menampilkan teks ‘User ke - 1 … User ke - 100’ pada setiap baris di halaman HTML.
Lakukan FOR LOOP pada Javascript.
	document.write

*/

let n = 100;
for (let i = 1; i <= n; i++) {
  document.write(`User ke - ${i} <br>`);
}

/*
2. Lakukan pengulangan menggunakan FOR LOOP untuk melakukan penambahan nilai sebanyak 10 kali.
Nilai awal = 0
Pengulangan = 10 kali
Nilai awal ditambah 2 setiap pengulangan
Tampilan hasil penambahan pada setiap pengulangan

0 2 4 6 8 10 12 14 16 18

*/

for (let i = 0; i < 20; i = i + 2) {
  console.log(i);
}

/*
3.  Lakukan pengulangan dengan FOR LOOP yang melakukan iterasi dari 0..20.
Setiap iterasi/pengulangan lakukan pengecekan apakah nilai tersebut ganjil atau genap.
Tampilkan keterangan ganjil dan genap pada sebuah nilai setiap pengulangan

Modulus, dan if

*/

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(`${i} = Genap`);
  } else {
    console.log(`${i} = Ganjil`);
  }
}

/*
Tampilkan sebuah Konfirmasi Pop Up kepada user menggunakan confirm();
Berikan teks ‘Apakah anda mau mengulang’ pada box confirm
Jika user memilih ‘OK’ maka program akan terus menampilan pop up yang sama
Jika user memilih ‘Cancel’ maka program akan menampilkan teks ‘Perulangan sudah dilakukan sebanyak …(jumlah klik OK yang dilakukan user)

Variable isinya confirm
Variable count 
While didalemnya ngecek confirm
Setiap click ngitung count
Count++ setiap di klik
*/

let konfirmasi = confirm("Apakah anda mau mengulang");
let count = 1;

while (konfirmasi) {
  konfirmasi = confirm("Apakah anda mau mengulang");
  if (konfirmasi) {
    count++;
  } else {
    alert(`Perulangan sudah dilakukan sebanyak ${count}`);
  }
}

/*
Buat sebuah program kuis.
Tampilkan prompt() untuk meminta inputan dari user. Tampilan teks ‘Sebutkan kepanjangan dari nama IB (Impact Byte)?’
Lakukan pengecekan apakah jawaban dari user sudah benar
Jika benar, tampilkan alert ‘Selamat jawaban kamu benar’
Jika salah, lakukan pengulangan untuk menampilkan prompt() yg sama hingga jawaban dari user benar
	
Variable isinya prompt
While
Prompt
Misal bener, break

*/

let input = prompt("Sebutkan kepanjangan dari nama IB (Impact Byte)?");

while (input) {
  if (input === "Impact Byte") {
    alert("Selamat jawaban kamu benar");
    break;
  } else {
    input = prompt("Sebutkan kepanjangan dari nama IB (Impact Byte)?");
  }
}
