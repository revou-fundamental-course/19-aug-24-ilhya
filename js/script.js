document.getElementById('formMessage').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var nama = document.getElementById('nama').value;
    var tanggalLahir = document.getElementById('tanggalLahir').value;
    var jenisKelamin = document.querySelector('input[name="jenisKelamin"]:checked').value;
    var pesan = document.getElementById('pesan').value;
    
    document.getElementById('resultNama').innerText = nama;
    document.getElementById('resultTanggalLahir').innerText = tanggalLahir;
    document.getElementById('resultJenisKelamin').innerText = jenisKelamin;
    document.getElementById('resultPesan').innerText = pesan;
  
  document.getElementById('formMessage').reset();
  document.getElementById('greeting').innerText = `Hi ${nama}, Welcome to our Department!`;
});