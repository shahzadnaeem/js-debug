const average = (nums) => {
  let sum = 0;

  //   console.log("Calculating sum of all values...");

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }

  //   console.log(`sum = ${sum}`);

  let average = 0;

  if (sum !== 0) {
    average = sum / nums.length;
  }

  return average;
};

module.exports = average;
