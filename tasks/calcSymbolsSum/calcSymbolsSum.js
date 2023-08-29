function calcSymbolsSum(str1, str2) {
    
    if(typeof str1 !== 'string' || typeof str2 !== 'string'){
        return 'bot params must be a string';
    }
    return (str1.length + str2.length)
}

module.exports = calcSymbolsSum;