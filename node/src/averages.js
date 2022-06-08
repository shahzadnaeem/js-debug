const average = require("./lib/average");

const nums = [0, 1, 2, 3, 4, 5, 6];
const nothing = [];
const sames = [2, 2, 2, 2];

const tests = [nums, nothing, sames];

tests.forEach((array) => {
  const avg = average(array);

  console.log(`average of '[${array}]' = ${avg}`);
  console.log();
});
