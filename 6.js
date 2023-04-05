// 6. Diberikan sebuah function yang menerima dua parameter angka. Function akan mengembalikan nilai FPB (Faktor Persekutuan Terbesar). FPB dari dua bilangan merupakan bilangan bulat positif terbesar yang dapat membagi habis kedua bilangan tersebut.

function gcd(firstNumber, secondNumber) {
    let fpb = 1;
    for (let i = 1; i <= firstNumber && i <= secondNumber; i++) {
        if (firstNumber % i === 0 && secondNumber % i === 0) {
            fpb = i;
        }
    }
    return fpb;
}

console.log(gcd(12, 16)); 
console.log(gcd(50, 40)); 
console.log(gcd(22, 99)); 
console.log(gcd(24, 36)); 
console.log(gcd(17, 23)); 