const sumAll = function(a, b) {
    if (typeof a != "number" || a < 0 || typeof b != "number" || b < 0) {
        return "ERROR"
    } else {
        let smaller = a < b ? a : b;
        let bigger = smaller === a ? b : a;
        let sum = 0;
        for (let i = smaller; i <= bigger; i++) {
            sum += i;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
