// 7. Diberikan sebuah function yang menerima satu parameter berupa angka. Function akan me-return true jika angka tersebut adalah bilangan prima. Jika tidak, return false.

function isPrime(number) {
    if ( number > 1 ) {
      for ( let i = 2; i < number; i++) {
        if ( number % i == 0) {
          return false;
        } 
      }
      return true;	
    }
    return false;
  }
  
  
  console.log(isPrime(3));
  console.log(isPrime(7));
  console.log(isPrime(6));
  console.log(isPrime(23));
  console.log(isPrime(33));