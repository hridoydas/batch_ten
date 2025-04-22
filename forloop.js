function variables() {
  // const, var, let
  const test = ["hello world", 33, "ostad", "Test", 88, ["one", 2, "three"]];
  for (let i = 0; i < test.length; i++) {
    console.log(`current data for index ${i} is: ${test[i]}`);
  }
}
variables();
