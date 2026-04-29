// Input:
function fibonacci(n) {
    const isNotValidParam = typeof n !== 'number' || n <= 0 || Number.isNaN(n);
    if (isNotValidParam) {
        console.log('Số phần tử không hợp lệ');
        return;
    }

    let a = 0;
    let b = 1;
    const arr =[a, b]

    for (let i = 2; i < n; i++) {
        const nextNumber = a + b;
        arr.push(nextNumber)

        a = b;
        b = nextNumber;
    }

    console.log(`day fibolasi cua ${n} là: `, ...arr)
}
/*
 6 => 0, 1, 2, 3, 5 , 8

*/


function fibonacci1(n, i=1, arr=[0,1]){
    if(i===n) return arr
    arr.push(arr[i] + arr[i-1])
    return fibonacci1(n, i+1, arr)
}

const a = fibonacci1(10)

console.log('a', a)

// Output:
// fibonacci(5); // 0 1 1 2 3
// fibonacci(10); // 0 1 1 2 3 5 8 13 21 34
// fibonacci(0); // Số phần tử không hợp lệ
// fibonacci(-5); // Số phần tử không hợp lệ
// fibonacci('abc'); // Số phần tử không hợp lệ
// fibonacci(1); // 0
