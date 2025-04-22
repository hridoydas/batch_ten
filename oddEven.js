function oddEven(data) {
  for (let i = 0; i < data.length; i++) {
    if (data[i] == 0) {
      console.log(`${data[i]} is an even number`);
    } else if (data[i] % 2 == 0) {
      console.log(`${data[i]} is an even number`);
    } else {
      console.log(`${data[i]} is an odd number`);
    }
  }
}
// a = 2;
// b = 5;
// console.log(a);
// console.log(b);

oddEven([1, 20, 2, 7, 4, 9, 55, 0]);
