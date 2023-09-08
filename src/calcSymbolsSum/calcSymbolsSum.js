function calcSymbolsSum(str1, str2) {
    
    if(typeof str1 !== 'string' || typeof str2 !== 'string'){
        console.log('bot params must be a string');
    }
    console.log(str1.length + str2.length);
}

module.exports = calcSymbolsSum;