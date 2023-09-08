function sumNumbers(){
    let number = prompt('Enter three-digit number: ');
    let numberArray = number.split('');
    
    console.log(numberArray.reduce((prev, current) => {return (Number(prev) + Number(current))}, 0));
}

module.exports = sumNumbers;