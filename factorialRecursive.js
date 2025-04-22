// 6! = 6 * 5 * 4 * 3 * 2 * 1 = 720
// 6! = 6 * 5! = 720
// 0! = 1;

function factorial(data) {
  if (data == 0 || data == 1) {
    return 1;
  } else if (data < 0) {
    return "Invalid input!";
  }
  let result = data * factorial(data - 1);
  return result;
}

console.log("Result is: " + factorial(5));
