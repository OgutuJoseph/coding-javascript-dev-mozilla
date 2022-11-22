/** ********** array methods - 4. copyWihtin() ********** */
/**
    Syntax
    entries()
 */

/** **4.1 desc** */
const entriesDesc = (req, res) => {
    // The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.

    const array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];

    const iterator = array.entries();

    const array1 = iterator.next().value;
    const array2 = iterator.next().value;
    const array3 = iterator.next().value;

    const result = {
        array1,
        array2,
        array3
    };
    res.status(200).json(result);
};

/** 4.2 **iterating with index and element** */
const entriesWithIndexAndElement = (req, res) => {
    const a = ["a", "b", "c"];

    let values = []
    for (const [index, element] of a.entries()) {
        values.push(`${index}: ${element}`);
    };  
    
    result ={
        values
    };

    res.status(200).json(result);
};

/** 4.3 **using a for...of loop**  */
const entriesWithFor_Of_Loop = (req, res) => {
    const array = ["a", "b", "c"];
    const arrayEntries = array.entries();

    let values = [];
    for (const element of arrayEntries) {
        values.push(element);
    };

    result ={
        values
    };

    res.status(200).json(result);
}; 

/** **iterating sparse arrays** */
const entriesWithSparseArrays = (req, res) => {
    const a = [ , 'a'];

    let values = []

    // using index and element    
    for (const [index, element] of a.entries()) {
        values.push(`${index}: ${element}`);
    };

    // // using for...of... loop 
    // for (const element of a) {
    //     values.push(element);
    // };

    result ={
        values
    };

    res.status(200).json(result);
};

/** **calling entries() on non-array objects** */
const entriesWithNonArrays = (req, res) => {
    const arrayLike = {
        length: 3,
        0: "a",
        1: "b",
        2: "c",
    };
    let values = [];
    for (const entry of Array.prototype.entries.call(arrayLike)) {
        // console.log(entry);
        values.push(entry);
    };

    result = {
        values
    };

    res.status(200).json(result);
};

module.exports = {
    entriesDesc,
    entriesWithIndexAndElement,
    entriesWithFor_Of_Loop,
    entriesWithSparseArrays,
    entriesWithNonArrays
};