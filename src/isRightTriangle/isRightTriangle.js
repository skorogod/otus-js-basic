function isoscelesTriangle(a, b, c) {
    let sides = [a,b,c].sort((a,b) => b - a);
    console.log(sides);
    if(Math.pow(sides[0], 2) === Math.pow(sides[1], 2) + Math.pow(sides[2],2)){
        return true;
    }
    else{
        return false};
} 

module.exports = isoscelesTriangle;