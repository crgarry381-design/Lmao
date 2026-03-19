
let startTime;
let interval;
let running = false;

function startTimer() {
    if (running) return;  

    running = true;
    startTime = Date.now();

    interval = setInterval(() => {
        let sekarang = Date.now();
        let waktu = (sekarang - startTime) / 1000;

        let detik = Math.floor(waktu);
        let mili = Math.floor((waktu - detik) * 100);

        document.getElementById("timer").innerText =
            String(detik).padStart(2, '0') + "." +
            String(mili).padStart(2, '0');
    }, 100);
}

function stopTimer() {
    if (!running) return;

    running = false;
    clearInterval(interval);
}


function hitung() {
    let waktuText = document.getElementById("timer").innerText;
    let waktu = parseFloat(waktuText);

    let gerbong = document.getElementById("gerbong").value;
    let panjangGerbong = document.getElementById("panjang").value || 20;

    let loko = document.getElementById("loko").value || 0;
    let panjangLoko = document.getElementById("jenisLoko").value || 0;

    
    if (!waktu || waktu <= 0) {
        alert("Tekan START dan STOP dulu!");
        return;
    }

    if (gerbong === "" || gerbong <= 0) {
        alert("Isi jumlah gerbong dulu!");
        return;
    }

   
    let totalPanjang =
        (gerbong * panjangGerbong) +
        (loko * panjangLoko);

    let kecepatan = totalPanjang / waktu;
    let kmh = kecepatan * 3.6;

    document.getElementById("hasil").innerText =
        "Kecepatan: " + kmh.toFixed(2) + " km/jam";
}