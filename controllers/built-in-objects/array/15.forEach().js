/** ********** array methods - 15. forEach() ********** */
/**
    Syntax
    // Arrow function
    forEach((element) => { ... })
    forEach((element, index) => { ... })
    forEach((element, index, array) => { ... })

    // Callback function
    forEach(callbackFn)
    forEach(callbackFn, thisArg)

    // Inline callback function
    forEach(function (element) { ... })
    forEach(function (element, index) { ... })
    forEach(function (element, index, array) { ... })
    forEach(function (element, index, array) { ... }, thisArg)
 */

/** **4.1 desc** */
const forEachDesc = (req, res) => {
    // The forEach() method executes a provided function once for each array element.
    const array1 = ['a', 'b', 'c']

    let outputs = [];
    array1.forEach(element => 
        outputs.push(`Element is: ${element}`)
    );

    res.status(200).json(outputs);
};

/** **4.2 forEach() expects a synchronous function — it does not wait for promises.** */
const forEachSyncDesc = (req, res) => {
    const ratings = [5, 4, 5];
    let sum = 0;

    const sumFunction = async (a, b) => a + b;

    ratings.forEach(async (rating) => {
        sum = await sumFunction(sum, rating);
    });

    const expectedSum = 5 + 4 + 5;
    const result = {
        'expectedSum' : expectedSum,
        'actualSum' : sum
    };

    res.status(200).json(result);
};

/** **4.3 Using forEach() on sparse arrays** */
const forEachOnSparseArrays = (req, res) => {
    const arraySparse = [1, 3, /* empty */, 7];
    let numCallbackRuns = 0;
    let outputs = []

    arraySparse.forEach((element) => {
        outputs.push(`Element is : ${element}`)
        numCallbackRuns++;
    });

    const result = {
        'sparse array': arraySparse,
        'outputs' : outputs,
        'number of call back runs': numCallbackRuns
    };

    res.status(200).json(result);
};

/** **4.4 converting a for loop to forEach** */
const forEachFromForLoop = (Req, res) => {
    const items = ["item1", "item2", "item3"];
    const forItems = [];
    const forEachItems = [];

    // before
    for (let i = 0; i < items.length; i++) {
        forItems.push(`For Item: ${items[i]}`);
    };

    // after
    items.forEach((item) => {
        forEachItems.push(`ForEach Item: ${item}`);
    });

    const result = {
        'for items': forItems,
        'forEach items': forEachItems
    };

    res.status(200).json(result);
};

/** **4.5 printing the contents of an array** */
const forEachToPrint = (req, res) => {
    let outputs = [];
    const logArrayElements = (element, index /*, array */) => {
        outputs.push(`a[${index}] = ${element}`);
    };

    [2, 5, , 9].forEach(logArrayElements);
    res.status(200).json(outputs);
};

/** **4.6 using thisArg** */
const forEachUsingThisArg = (req, res) => {
    class Counter {
        constructor() {
            this.sum = 0;
            this.count = 0;
        }
        add(array) {
            // Only function expressions will have its own this binding
            array.forEach(function countEntry(entry) {
                this.sum += entry;
                ++this.count;
            }, this);
        }
    }
    
    const obj = new Counter();
    obj.add([2, 5, 9])

    const result = {
        'obj': obj,
        'obj count': obj.count,
        'obj sum': obj.sum
    };

    res.status(200).json(result);
};

/** **4.7 an object copy function** */
const forEachToCopyObject = (req, res) => {
    const copy = (obj) => {
        const copy = Object.create(Object.getPrototypeOf(obj));
        const propNames = Object.getOwnPropertyNames(obj);
        propNames.forEach((name) => {
            const desc = Object.getOwnPropertyDescriptor(obj, name);
            Object.defineProperty(copy, name, desc);
        });
        return copy;
    };

    const obj1 = { a: 1, b: 2 };
    const obj2 = copy(obj1);

    const result = {
        'obj1' : obj1,
        'obj2' : obj2,
        'obj3' : obj3
    };

    res.status(200).json(result);
};

/** **4.8 modifying the array during iteration** */
const forEachToModifyArray = (req, res) => {
    const words = ["one", "two", "three", "four"];
    words.forEach((word) => {
        console.log(word);
        if (word === "two") {
            words.shift(); //'one' will delete from array
        }
    });

    res.status(200).json(words);
};

/** **4.9 flatten an array** */
const forEachToFlattenArray = (req, res) => {
    const flatten = (arr) => {
        const result = [];
        arr.forEach((item) => {
            if (Array.isArray(item)) {
                result.push(...flatten(item));
            } else {
                result.push(item);
            }
        });
        return result;
    };

    const nested = [1, 2, 3, [4, 5, [6, 7], 8, 9]];
    const output = flatten(nested);

    res.status(200).json(output);
};

/** **4.10 calling forEach() on non-array objects */
const forEachOnNonArrays = (req, res) => {
    const arrayLike = {
        length: 3,
        0: 2,
        1: 3,
        2: 4,
    };

    let outputs = [];
    Array.prototype.forEach.call(arrayLike, (x) => 
        outputs.push(x)
    );

    res.status(200).json(outputs);
};

module.exports = {
    forEachDesc,
    forEachSyncDesc,
    forEachOnSparseArrays,
    forEachFromForLoop,
    forEachToPrint,
    forEachUsingThisArg,
    forEachToCopyObject,
    forEachToModifyArray,
    forEachToFlattenArray,
    forEachOnNonArrays
};