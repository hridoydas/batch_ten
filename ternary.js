const oddEven = () => {
  for (let i = 0; i < data.length; i++) {
    data[i] == 0
      ? console.log(`${data[i]} is an even number`)
      : data[i] % 2 == 0
      ? console.log(`${data[i]} is an even number`)
      : console.log(`${data[i]} is an odd number`);
  }
};

oddEven([1, 20, 2, 7, 4, 9, 55, 0]);
