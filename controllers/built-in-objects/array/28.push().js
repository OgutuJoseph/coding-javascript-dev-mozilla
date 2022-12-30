/** ********** array methods - 28. push() ********** */
/**
    Syntax
    push(element0)
    push(element0, element1)
    push(element0, element1, ... elementN)
*/

/** **28.1 desc** */
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

/** **28.2 merging two arrays** */
const pushMergingTwoArrays = (req, res) => {
    const vegetables = ["parsnip", "potato"];
    const moreVegs = ["celery", "beetroot"];

    // Merge the second array into the first one
    vegetables.push(...moreVegs);

    res.status(200).json(vegetables);
};

/** **28.3 calling push() on non-array objects** */
const pushOnNonArrays = (req, res) => {
    const arrayLike = {
        length: 3,
        unrelated: "foo",
        2: 4,
    };
    Array.prototype.push.call(arrayLike, 1, 2);


    /*******************/
    const plainObj = {};
    // There's no length property, so the length is 0
    Array.prototype.push.call(plainObj, 1, 2);

    const result = {
        "array like result": arrayLike,
        "plain object result": plainObj
    };

    res.status(200).json(result)
};

/** **28.4 using an object in an array-like fashion** */
const pushWithObjectInArrayLikeFashion = (req, res) => {
    const obj = {
        length: 0,
    
        addElem(elem) {
            // obj.length is automatically incremented
            // every time an element is added.
            [].push.call(this, elem);
        },
    };
    
    // Let's add some empty objects just to illustrate.
    obj.addElem({});
    obj.addElem({});
    
    const result = {
        "object" : obj,
        "object length": obj.length
    };

    res.status(200).json(result);
}


module.exports = {
    pushDesc,
    pushMergingTwoArrays,
    pushOnNonArrays,
    pushWithObjectInArrayLikeFashion
};