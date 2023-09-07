function quadraticEquation() {
    let a = Number(prompt('enter a:'));
    let b = Number(prompt('enter b:'));
    let c = Number(prompt('enter c:'));

    console.log(a, b, c)

    let D = Math.pow(b, 2) - 4*a*c;

    let x1 = (-b + Math.sqrt(D))/(2*a);
    let x2 = (-b - Math.sqrt(D))/(2*a);

    console.log(x1, x2 )

    return [x1, x2];

}

module.exports = quadraticEquation;