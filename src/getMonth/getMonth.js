let months = {
    1: 'january',
    2: 'february',
    3: 'march',
    4: 'april',
    5: 'may',
    6: 'june',
    7: 'july',
    8: 'august',
    9: 'september',
    10: 'october',
    11: 'november',
    12: 'december'
}

function getMonth(){
    let number = Number(prompt('enter number: '));
    console.log(number);
    console.log(months.number);
    if(number in months){
        return months[number];
    }
    else{
        return "not in object";
    }
}

module.exports = getMonth;