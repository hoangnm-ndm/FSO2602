  //10
  /*
    Lần 1: i= 2 => in 4
    Lần 2: i=3 => in ra 9
    
    Lần 3: i =4 => i*i =16 => i*i>n ==> vòng lặp dừng và chỉ chạy 2 lần
  */ 
  function printSquareNumber(n) {
      for (let i = 2; i * i <= n; i++) {
        console.log(i * i);
      }
    }
const n = +window.prompt("Nhập số n:");
printSquareNumber(n)