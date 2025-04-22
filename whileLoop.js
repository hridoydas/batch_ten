function variables() {
  const test = ["hello world", 33, "ostad", "Test", 88, ["one", 2, "three"]];

  let i = 0;
  while (i < test.length) {
    // console.log(`current data for index ${i} is: ${test[i]}`);
    i++;
    var testVariable = "Test Data";
  }
  console.log(testVariable);
}

variables();
