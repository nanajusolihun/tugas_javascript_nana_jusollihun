var tanya = true;

while (tanya) {
    let nilai = prompt("INPUT NILAI : (Nilai mulai dari 1 - 100)");

    if (nilai >= 80 && nilai <= 100) {
        alert("Nilai anda A");
      } else if (nilai >= 60 && nilai < 80) {
        alert("Nilai anda B");
      } else if (nilai >= 40 && nilai < 60) {
        alert("Nilai anda C");
      } else if (nilai >= 20 && nilai < 60) {
        alert("Nilai anda D");
      } else if (nilai >= 1 && nilai < 20) {
        alert("Nilai anda E");
      } else if (nilai >= 100) {
        alert("Tidak termasuk nilai input");
      } else {
        alert("Anda tidak input nilai");
      }
      tanya = confirm("Input nilai lagi?");
}

alert("Terima kasih!")