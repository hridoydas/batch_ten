// [2, 33, 10, 1, 9, 15, 44];
function getMin(array) {
  let minValue = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < minValue) {
      minValue = array[i];
    }
  }
  console.log(`Maximum Value of the array is: ${minValue}`);
}

getMin([2, 33, 10, 1, 9, 15, 44]);
