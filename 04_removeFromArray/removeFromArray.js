const removeFromArray = function(array, ...rest) {
    for (const element of rest) {
        while (array.includes(element)) {
            index = array.indexOf(element);
            array = array.slice(0, index).concat(array.slice(index + 1)).concat(array.at(index));
            array.pop();
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
