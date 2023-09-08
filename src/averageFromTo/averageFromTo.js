function averageFromTo() {
  const n = Number(window.prompt("Enter N: "));
  const arr = [];

  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      arr.push(i);
    }
  }

  return arr.reduce((curr, prev) => curr + prev, 0) / arr.length;
}

module.exports = averageFromTo;
