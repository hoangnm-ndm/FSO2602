function taxSalary(salary) {
  if (Number.isNaN(salary) || salary <= 0) {
    console.log("Thu nhập không hợp lệ");
  }

  if (salary <= 11_000_000) {
    return 0;
  }

  if (salary <= 25_000_000) {
    return salary * 0.05;
  }

  if (salary <= 50_000_000) {
    return salary * 0.1;
  }

  if (salary <= 80_000_000) {
    return salary * 0.2;
  }

  return salary * 0.3;
}
let salary = +window.prompt("Nhap luong:");
console.log(taxSalary(salary));