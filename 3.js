// 3. 

function uruthuruf(text) {
    let sorted = "";
    for (let i = 0; i < text.length; i++) {
            for (let j = i + 1; j < text.length; j++) {
                    if (text[j] < text[i]) {
        let temp = text[i];
        text = text.substring(0, i) + text[j] + text.substring(i + 1, j) + temp + text.substring(j + 1);
        }
    }
    sorted += text[i];
}
return sorted;
}

console.log(uruthuruf("halo"));
console.log(uruthuruf("qwerty"));
console.log(uruthuruf("qwertyuiopasdfghjklzxcvbnm"));