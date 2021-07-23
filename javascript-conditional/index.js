/*
1. Buat conditional IF .. ELSE IF yang menggambarkan divisi dan tugas divisi pada STARTUP. (CEO, CTO, HR, PROGRAMMER)
Contoh: Jika saya sebagai HR maka tugas saya adalah melakukan rekrutmen untuk calon pegawai baru

2. Buat conditional untuk membandingkan 2 buah nilai. Tampilkan apakah salah satu nilai misal a lebih besar dari b, a lebih kecil dari b, dan a sama dengan b.

3. Gunakan switch case untuk mengetahui nama hari berdasarkan angka.
Hari minggu dimulai dari angka 1 dan seterusnya
*/

let posisiJabatan = "HRD";
if (posisiJabatan === "CEO") {
  console.log("Sebagai pemimpin tertinggi di sebuah perusahaan");
} else if (posisiJabatan === "CTO") {
  console.log("membantu perusahaan mencapai tujuan keuangan dan pemasarannya");
} else if (posisiJabatan === "HR") {
  console.log("Melakukan rekrutmen untuk calon pegawai baru");
} else if (posisiJabatan === "PROGRAMMER") {
  console.log("Membuat dan maintenance aplikasi");
} else {
  console.log(posisiJabatan);
}

let nilai1 = 20;
let nilai2 = 20;

if (nilai1 === nilai2) {
  console.log(`${nilai2} sama dengan ${nilai1}`);
} else if (nilai1 < nilai2) {
  console.log(`${nilai2} lebih besar dari ${nilai1}`);
} else {
  console.log(`${nilai1} lebih besar dari ${nilai2}`);
}

let hari = 1;
switch (hari) {
  case 1:
    console.log("minggu");
    break;
  case 2:
    console.log("senin");
    break;
  case 3:
    console.log("selasa");
    break;
  case 4:
    console.log("rabu");
    break;
  case 5:
    console.log("kamis");
    break;
  case 6:
    console.log("jumat");
    break;
  case 7:
    console.log("sabtu");
    break;

  default:
    console.log("Bukan hari");
    break;
}

/*
4. Gunakan switch case untuk membuat sebuah game sederhana.
UP -> Karakter berjalan keatas
RIGHT -> Karakter berjalan kekanan
BOTTOM -> Karakter berjalan kebawah
LEFT -> Karakter berjalan kekiri
*/

let move = "UP";
switch (move) {
  case "UP":
    console.log("Karakter berjalan keatas");
    break;
  case "RIGHT":
    console.log("Karakter berjalan kekanan");
    break;
  case "BOTTOM":
    console.log("Karakter berjalan kebawah");
    break;
  case "LEFT":
    console.log("Karakter berjalan kekiri");
    break;
}
