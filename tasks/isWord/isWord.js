const isWord = (str) => {
    return str.split(' ').length > 1 ? false : true;
}

module.exports = isWord;