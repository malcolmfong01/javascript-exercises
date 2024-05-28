const removeFromArray = function(array, ...n) {
    let noElements = array.length;
    for (num of n){
        for(let i=0; i<noElements; i++)
        {
            if(array[i] === num)
            {
                array.splice(i,1);
                i--;
                noElements--;
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
