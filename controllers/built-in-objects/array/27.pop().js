/** ********** array methods - 27. pop() ********** */
/**
    Syntax
    pop()
*/

/** **27.1 desc** */
const popDesc = (req, res) => {
    // The pop() method removes the last element from an array and returns that element. This method changes the length of the array.
    
    const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

    const firstPopped = plants.pop();
    const secondPopped = plants.pop();

    const result = {
        firstPopped,
        secondPopped,
        plants
    };
    
    res.status(200).json(result);
};

/** **27.2 calling pop() on non-array objects** */
const popOnNonArrayObjects = (req, res) => {
    const arrayLike = {
        length: 3,
        unrelated: "foo",
        2: 4,
    };
    const popped = Array.prototype.pop.call(arrayLike);


    /******************/
    const arrayLike2 = {
        length: 4,
        unrelated: "foo",
        2: 4,
        3: 7
    };
    const popped2 = Array.prototype.pop.call(arrayLike2);
    
    const result = {
        popped,
        arrayLike,
        popped2,
        arrayLike2
    };

    res.status(200).json(result);
};

/** **27.3 Using an object in an array-like fashion** */
const popWithObjectInArrayLikeFashion = (req, res) => {
    const collection = {
        length: 0,
        addElements(...elements) {
            // obj.length will be incremented automatically every time an element is added.
        
            // Returning what push returns; that is, the new value of length property.
            return [].push.call(this, ...elements);
        },
        removeElement() {
            // obj.length will be decremented automatically every time an element is removed.
        
            // Returning what pop returns; that is, the removed element.
            return [].pop.call(this);
        },
    };

    collection.addElements(10, 20, 30);
    const addedLength = collection.length;
    collection.removeElement();
    const removedLength = collection.length

    const result = {
        addedLength,
        collection,
        removedLength
    };

    res.status(200).json(result);
};

module.exports = {
    popDesc,
    popOnNonArrayObjects,
    popWithObjectInArrayLikeFashion
};