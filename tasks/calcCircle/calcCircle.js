function calcCircle(r){
    let square = (Math.PI * Math.pow(r, 2));
    console.log(square.toFixed(2));
    let circumference = 2 * Math.PI * r;
    console.log(circumference.toFixed(2));
}

module.exports = calcCircle;