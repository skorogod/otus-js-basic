function getYounger(personOne, personTwo){
    firstDate = fromStrToDate(personOne);
    secondDate = fromStrToDate(personTwo);
    console.log(firstDate)
    console.log(secondDate)

    return firstDate > secondDate ? personOne : personTwo;
}

function fromStrToDate(str){
    [day, month, year] = str.split('.');
    return new Date(`${year}-${month}-${day}`)
}

module.exports = getYounger;