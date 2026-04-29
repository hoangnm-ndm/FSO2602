// Tran Duc An

//input: 1 số
//output: true/false
// logic: số nguyên tố chỉ chia hết cho 1 và chính nó
// 10: tìm 1 số 10 có thể chia hết cho số <=5
// 20: chỉ chia hết cho số <=10

const isPrimeNumber = function (n) {
  if(n<2) return false
  if(n===2) return true;

  for (let i = 2; i <= n/2; i++) {
    if(n%i ===0){
      return false
    }
  }

  return true;
};

const printPrimeNumber = function (n) {
  let primeString = ``;
  for (let i = 0; i <= n; i++) {
    if (isPrimeNumber(i)) {
      primeString += `${i} `;
    }
  }
  console.log(primeString);
};


let n = +prompt("Moi ban nhap n:");

printPrimeNumber(n);
