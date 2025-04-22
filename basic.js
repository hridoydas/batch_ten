// const, var, let
function sum(data_one, data_two) {
  const result = data_one + data_two;
  return result;
}

function multiply(data_one, data_two) {
  const result = data_one * data_two;
  return result;
}

function div(data_one, data_two) {
  const result = data_one / data_two;
  return result;
}

function subs(data_one, data_two) {
  const result = data_one - data_two;
  return result;
}

console.log("Result is: " + sum(10, 2));
console.log(`Result is: ${subs(10, 2)}`);
console.log("Result is: " + multiply(10, 2));
console.log("Result is: " + div(10, 2));
