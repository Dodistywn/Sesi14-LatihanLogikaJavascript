// 5. Diberikan sebuah function yang menerima satu parameter berupa string. Function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali. Jika tidak ditemukan sama sekali, kembalikan nilai false.

function thereesStepsAB(text) {
    for (let i = 0; i < text.length; i++) {
        if (text[i] === "a" && text[i + 4] === "b") {
            return true;
        } else if (text[i] === "b" && text[i + 4] === "a") {
            return true;
        }
    }
    return false;
}
  

console.log(thereesStepsAB('lane borrowed'));
console.log(thereesStepsAB('i am sick'));
console.log(thereesStepsAB('you are boring'));
console.log(thereesStepsAB('barbarian'));
console.log(thereesStepsAB('bacon and meat'));
