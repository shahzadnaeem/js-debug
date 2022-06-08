const average = require("../src/lib/average");

describe("Average tests", () => {
  it("Average an empty arrray", () => {
    const expectedAverage = 0;
    const input = [];

    const result = average(input);

    expect(result).toEqual(expectedAverage);
  });
});
