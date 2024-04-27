const reverseString = function(string) {
    let string_array = [];
    for (let i = 0; i < string.length; i++) {
        string_array.push(string[i]);
    }
    string_array = string_array.reverse();
    return string_array.join('');
};

// Do not edit below this line
module.exports = reverseString;
