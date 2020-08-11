const nominalSeparator = value => {
    const string = removeSeparator(value);
    if (!string) return "";
    let newStringArray = [];
    let counter = 0;
    for (let i = string.length - 1; i >= 0; i--) {
        if (counter % 3 === 0 && counter !== 0) {
            newStringArray.unshift(".");
        }
        newStringArray.unshift(string[i]);
        counter++;
    }
    return newStringArray.join('');
};

const removeSeparator = value => {
    const stringArray = value.toString().split('');
    stringArray.forEach((char, i) => {
        if (char === '.') {
            stringArray.splice(i, 1);
        }
    });
    return stringArray.join("");
};

const isNumber = value => {
    const string = removeSeparator(value);
    for (let i = 0; i < string.length; i++) {
        if (isNaN(string[i])) {
            return false;
        }
    }
    return true;
};

const removeZeroOnFront = value => {
    const string = removeSeparator(value);
    const stringArray = string.split('');
    if (string[0] === '0') {
        stringArray.shift();
    }
    return stringArray.join('');
};

const calculateDiscount = (price, discount) => {
    const cut = ((discount / 100) * price);
    const netPrice = price - cut;
    return Math.ceil(netPrice);
};

export {
    nominalSeparator,
    removeSeparator,
    isNumber,
    removeZeroOnFront,
    calculateDiscount
};
