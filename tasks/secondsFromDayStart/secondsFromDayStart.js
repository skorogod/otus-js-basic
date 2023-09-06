function getSeconds() {
    const dayStart = new Date('2023-09-06T00:00:00');
    const now = Date.now();
    let diff = (now - dayStart) / 1000 / 60;
    console.log(diff.toFixed(0))
}

module.exports = getSeconds;