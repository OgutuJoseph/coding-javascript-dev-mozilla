/** ********** array methods - 36. splice() ********** */
/**
    Syntax
    splice(start)
    splice(start, deleteCount)
    splice(start, deleteCount, item1)
    splice(start, deleteCount, item1, item2, itemN)
*/

/** **36.1 desc** */
const spliceDesc = (req, res) => {
    // The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. 

    const months = ['Jan', 'March', 'April', 'June'];

    months.splice(1, 0, 'Feb', 'Feb2', 'Feb3');
    // Inserts at index 1
    console.log('months1: ', months);
    // expected output: Array ["Jan", "Feb", "March", "April", "June"]

    months.splice(4, 1, 'May');
    // Replaces 1 element at index 4
    console.log('months 2: ', months);
    // expected output: Array ["Jan", "Feb", "March", "April", "May"]

    const result = {
        months,
    }

    res.status(200).json(result);
};

/** **36.2 remove zero(0) element(s) and insert new one(s)** */
const spliceRemoveNonInsertNew = (req, res) => {
    /**Remove 0 (zero) elements before index 2, and insert "drum"  */
    const myFish = ["angel", "clown", "mandarin", "sturgeon"];
    const removed = myFish.splice(2, 0, "drum");

    /**Remove 0 (zero) elements before index 2, and insert "drum" and "guitar" */
    const myFish2 = ["angel", "clown", "mandarin", "sturgeon"];
    const removed2 = myFish2.splice(2, 0, "drum", "guitar");

    const result = {
        myFish,
        removed,
        myFish2,
        removed2
    };

    res.status(200).json(result);
};

/** **36.3 remove element(s)** */
const splliceRemoveElements = (req, res) => {
    /**Remove 1 element at index 3 */
    const myFish = ["angel", "clown", "drum", "mandarin", "sturgeon"];
    const removed = [...myFish].splice(3, 1);
    const removed2 = [...myFish].splice(3, 2);

    /**Remove 2 elements, starting from index 2 */
    const myFish3 = ["parrot", "anemone", "blue", "trumpet", "sturgeon"];
    const removed3 = [...myFish3].splice(2, 2);
    
    const result = {
        myFish,
        removed,
        removed2,
        myFish3,
        removed3
    };

    res.status(200).json(result);
};

/** **36.4 remove element(s) and insert new one(s)** */
const spliceRemoveReplace = (req, res) => {
    /**Remove 1 element at index 2, and insert "trumpet" */
    const myFish = ["angel", "clown", "drum", "sturgeon"];
    const removed = myFish.splice(2, 1, "trumpet");

    /**Remove 2 elements from index 0, and insert "parrot", "anemone" and "blue" */
    const myFish2 = ["angel", "clown", "trumpet", "sturgeon"];
    const removed2 = myFish2.splice(0, 2, "parrot", "anemone", "blue");

    const result = {
        myFish,
        removed,
        myFish2,
        removed2
    };

    res.status(200).json(result);
};

/** **36.5 using splice() on sparse arrays** */
const spliceWithSparseArrays = (req, res) => {
    const arr = [1, , 3, 4, , 6];
    const testingArr = [1, , 3, 4, , 6];

    const removed = testingArr.splice(1, 2);

    const result = {
        "array": arr,
        "removed": removed,
        "remaning": testingArr
    };

    res.status(200).json(result);
};

/** **36.6 calling splice() on non-array objects** */
const spliceOnNonArrays = (req, res) => {
    const arrayLike = {
        length: 3,
        unrelated: "foo",
        0: 5,
        2: 4,
    };

    const testingArrayLike = {
        length: 3,
        unrelated: "foo",
        0: 5,
        2: 4,
    };

    const spliced = Array.prototype.splice.call(testingArrayLike, 0, 1, 2, 3);

    const result = {
        spliced,
        testingArrayLike
    };

    res.status(200).json(result);
};

module.exports = {
    spliceDesc,
    spliceRemoveNonInsertNew,
    splliceRemoveElements,
    spliceRemoveReplace,
    spliceWithSparseArrays,
    spliceOnNonArrays
};