function add(x, y) {
  const sum = x + y;

  return sum;
}

function multiply(x, y) {
  const product = x * y;

  return product;
}

function badAdd(x, y) {
  const sum = x + y;
}

const x = 1;
const y = 2;

const sum = add(x, y);

console.log(`x=${x}, y=${y}, add(${x},${y}) = ${sum}`);

const badSum = badAdd(x, y);

console.log(`x=${x}, y=${y}, badAdd(${x},${y}) = ${badSum}`);

const product = multiply(x, y);

console.log(`x=${x}, y=${y}, multiply(${x},${y}) = ${product}`);
