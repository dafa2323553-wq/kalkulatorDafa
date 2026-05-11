const display = document.getElementById('display');

// Fungsi menambah karakter ke layar
function appendToDisplay(input) {
    if (display.value === "0" || display.value === "Error") {
        display.value = input;
    } else {
        display.value += input;
    }
}

// Fungsi tombol CLEAR
function clearDisplay() {
    display.value = "0";
}

// Fungsi hapus karakter terakhir (DEL)
function backspace() {
    if (display.value.length > 1) {
        display.value = display.value.slice(0, -1);
    } else {
        display.value = "0";
    }
}

// Fungsi Hitung (Validasi & Desimal)
function calculate() {
    try {
        // Menggunakan eval untuk menghitung string matematika
        let result = eval(display.value);
        
        // Cek jika pembagian dengan nol
        if (!isFinite(result)) {
            display.value = "Error";
        } else {
            // Membatasi desimal maksimal 10 angka di belakang koma
            display.value = parseFloat(result.toFixed(10));
        }
    } catch (error) {
        // Menangani input tidak valid seperti 5++2
        display.value = "Error";
    }
}