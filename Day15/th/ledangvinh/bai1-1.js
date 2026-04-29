console.log("Bai 1 : ");
function cleanFalsyValues(arr) {
  // const result = arr.filter(Boolean);
  // push
  const result =[]
  for(let i=0;i<arr.length;i++){
    if(arr[i]){
      result.push(arr[i])
    }
  }

  console.log(result);
}

cleanFalsyValues([1, 0, "", null, "hello", undefined, NaN, 2, 3]);
