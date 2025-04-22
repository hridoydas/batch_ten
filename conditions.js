function condition(mark) {
  if (mark >= 90 && mark <= 100) {
    console.log(`Your Grade is: A+`);
  } else if (mark >= 80 && mark <= 89) {
    console.log(`Your Grade is: A`);
  } else if (mark >= 70 && mark <= 79) {
    console.log(`Your Grade is: B`);
  } else if (mark >= 60 && mark <= 69) {
    console.log(`Your Grade is: C`);
  } else if (mark >= 0 && mark <= 59) {
    console.log(`Your Grade is: Fail`);
  } else {
    console.log("Please enter valid mark");
  }
}
condition(70);

// value >90 and <=100 ==> A+
// value >80 and <=89 ==> A
// value >70 and <=79 ==> B
// value >60 and <=69 ==> C
// value <60 ==> fail
