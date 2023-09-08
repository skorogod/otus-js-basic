function sumFromTo() {
  const arr = [];

  for (let i = 50; i <= 100; i++) {
    arr.push(i);
  }

  return arr.reduce((prev, curr) => prev + curr, 0);
}

module.exports = sumFromTo;
