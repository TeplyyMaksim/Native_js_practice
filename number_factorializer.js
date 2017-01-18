/* Function that find number-factorial*/
function factorialize(num) {
  fact = 1;
  for (var i = 1; i <= num; i++) {
    fact *= i;
  }
  return fact;
}
 
