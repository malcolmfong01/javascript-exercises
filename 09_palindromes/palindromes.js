const palindromes = function (string) {
    let regEx = string.toLowerCase().replace(/[\W]/g, '');

    for(let i = 0, j = regEx.length - 1; i < regEx.length; i++, j--)
    {
        if(regEx[i] != regEx[j]) return false;
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
