console.log("Bai 3 : ");
function filterLongStrings(arr) {
  const result = arr.filter((str) => str.length > 5);
  console.log(result);
}

filterLongStrings(["hello", "world", "javascript", "nodejs"]); // Output: ["javascript", "nodejs"]
filterLongStrings(["hi", "hello world", "a b c", "goodbye!!"]); // Output: ["hello world", "goodbye!!"]
filterLongStrings(["hi", "bye", "yes"]); // Output: []
