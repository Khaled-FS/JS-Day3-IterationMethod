function task(number) {
  console.log(`-----task ${number}------`);
}

const numbers = [10, 13, 20, 25, 38, 35, 40];

const greaterNum = numbers.filter((num) => {
  return num >= 25;
});
task("1-Q1");
console.log(greaterNum);

const divisibleBy = numbers.filter((num) => {
  return num % 5 == 0;
});
task("1-Q2");
console.log(divisibleBy);

const sq = numbers.map((num2) => {
  return num2 ** 2;
});
task("2-Q3");
console.log(sq);

const multipliedBy = numbers.map((num) => {
  return num * 2;
});
task("2-Q3");
console.log(multipliedBy);

const greaterNum20 = numbers.filter((num) => {
  return num >= 20;
});
const square = greaterNum20.map((num) => {
  return num ** 2;
});

task("3-Q1");
console.log(square);
