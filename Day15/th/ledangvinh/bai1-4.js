console.log("Bai 4 : ");
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function findMinMaxAverage(arr) {
  if (arr.length === 0) return;

  let max = arr[0],
    maxIndex = 0;
  let min = arr[0],
    minIndex = 0;
  let primeSum = 0,
    primeCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      maxIndex = i;
    }

    if (arr[i] < min) {
      min = arr[i];
      minIndex = i;
    }

    if (isPrime(arr[i])) {
      primeSum += arr[i];
      primeCount++;
    }
  }

  const avgPrime = primeCount > 0 ? primeSum / primeCount : null;

  console.log({
    max: max,
    maxIndex: maxIndex,
    min: min,
    minIndex: minIndex,
    avgPrime: avgPrime,
  });
}

findMinMaxAverage([3, 1, 4, 1, 5, 9, 2, 6]); // Output: {max: 9, maxIndex: 5, min: 1, minIndex: 1, primeAverage: 3.33 }
findMinMaxAverage([5, 5, 2, 2, 1]); // Output: {max: 5, maxIndex: 0, min: 1, minIndex: 4, primeAverage: 3.5 }
findMinMaxAverage([-3, 7, -8, 11, 0]); // Output: {max: 11, maxIndex: 3, min: -8, minIndex: 2, primeAverage: 9 }
