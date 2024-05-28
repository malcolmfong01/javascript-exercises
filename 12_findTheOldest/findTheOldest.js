const findTheOldest = function(people) {
    const sortedAge = people.sort((a, b) => {
        return (b["yearOfDeath"] - b["yearOfBirth"]) - (a["yearOfDeath"] - a["yearOfBirth"]);
    });

    return sortedAge[0];
};

// Do not edit below this line
module.exports = findTheOldest;
