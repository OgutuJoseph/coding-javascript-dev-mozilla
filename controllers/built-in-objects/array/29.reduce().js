/** ********** array methods - 29. reduce() ********** */
/**
    Syntax
    push(element0)
    push(element0, element1)
    push(element0, element1, ... elementN)

/** **4.1 desc** */
const pushDesc = (req, res) => {
    // The push() method adds one or more elements to the end of an array and returns the new length of the array.

    const animals = ['pigs', 'goats', 'sheep'];

    const firstCount = animals.push('cows');
    const secondCount = animals.push('chickens', 'cats', 'dogs');

    const result = {
        animals,
        firstCount,
        secondCount
    };
    
    res.status(200).json(result);
};


module.exports = {
    pushDesc,
    pushMergingTwoArrays,
    pushOnNonArrays,
    pushWithObjectInArrayLikeFashion
};