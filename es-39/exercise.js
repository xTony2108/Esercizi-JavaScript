function multiplyByTwo(value) {
  let number = 2;
  function inner() {
    value *= number;
    return value;
  }
  return inner;
}

console.log(multiplyByTwo(4)());