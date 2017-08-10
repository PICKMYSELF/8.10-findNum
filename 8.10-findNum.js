function findNum(arr){
  for (let value of arr) {
    if (arr.indexOf(value) == arr.lastIndexOf(value)) {
      return value;
    }
  }
}

console.log(findNum([1, 2, 2, 5, 6, 5, 6])); 
console.log(findNum([3 ,4, 5, 3, 4, 5, 0]))