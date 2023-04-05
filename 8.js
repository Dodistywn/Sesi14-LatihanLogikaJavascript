// 8. Buatlah function yang me return array berisi angka prima. Function tersebut menerima input angkaPertama dan angka kedua, dan mencari semua angka prima yang ada di antara angka Pertama dan angkaKedua.

function listPrima(angkaPertama, angkaKedua) {
    let bilanganPrima = [];
    for (let i = angkaPertama; i <= angkaKedua; i++) {
        if (i < 2) {
            continue; // abaikan bilangan < 2
        }
        let isPrima = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
            isPrima = false;
            break;
            }
        }
        if (isPrima) {
            bilanganPrima.push(i);
        }
    }
    return bilanganPrima;
}

// Contoh penggunaan fungsi:
console.log(listPrima(1, 5));
console.log(listPrima(5, 10));
console.log(listPrima(10, 20));