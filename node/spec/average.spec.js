const using = require('jasmine-data-provider');

const average = require("../src/lib/average");

// Create an array with values from 'start' to 'end' inclusive
function range(start, end, step) {
  if ( step === 0 ) {
    throw new RangeError('Range cannot have 0 step!');
  }
  return Array.from( { length: (end-start)/step + 1}, (_,i) => start + i * step )
}

function numRangeProvider() {
  const rows = []
  const upTos = [0,1,2,3,5,10,100,200,500,1000]

  upTos.forEach(n => {
    const expectedSum = (n * (n+1))/2;
    const expectedAverage = n === 0 ? 0 : expectedSum / n;
    const input = n === 0 ? [] : range( 1, n, 1 );

    rows.push({ input, expectedAverage })
  });
  
  return rows;
}

describe("Average tests", () => {
  it("Average an empty arrray", () => {
    const expectedAverage = 0;
    const input = [];

    const result = average(input);

    expect(result).toEqual(expectedAverage);
  });

  it("Average repeated number is number itself", () => {
    const num = 345;
    const n = 1000;
    const expectedAverage = num;
    const input = Array(n).fill(num);   // Create an array of size 'n' with all values of 'num'

    const result = average(input);

    expect(result).toEqual(expectedAverage);
  });

  it("Average of array with sum of 0 is 0", () => {
    const expectedAverage = 0;
    const input = [-3,-2,-100,0,100,2,3];

    const result = average(input);

    expect(result).toEqual(expectedAverage);
  });

  it("Average 1..n array", () => {
    using( numRangeProvider, (data) => {

      const result = average( data.input )

      expect(result).toEqual(data.expectedAverage);
    })
  });

});
