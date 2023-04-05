// 1. 

function compareNumbers(firstNumber, secondNumber) {
    if (firstNumber > secondNumber) {
        return true;
    } else if (firstNumber = secondNumber) {
        return -1;
    } else {
        return false;
    }
}

console.log(compareNumbers(5,8));