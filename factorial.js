// 6! = 6 * 5 * 4 * 3 * 2 * 1 = 720
// 6! = 6 * 5! = 720
// 0! = 1;
function factorial(data) {
  let result = 1;
  if (data == 0) {
    return 1;
  } else if (data <0) {
    return "Invalid input!";
  }
  for (let i = 2; i <= data; i++) {
    result = result * i;
  }
  return result;
}
console.log("Result is: " + factoril(5));
