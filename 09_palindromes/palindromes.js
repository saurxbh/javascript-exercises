const palindromes = function(string) {
    const reversedString = string.split('').reverse().join('');
    return string === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
