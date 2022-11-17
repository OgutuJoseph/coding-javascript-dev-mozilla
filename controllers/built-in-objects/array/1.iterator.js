/** ********** array methods - 1. [@@iterator] ********** */

const iterator = (req, res) => {
    /** Iteration using for...of loop <--/> client side scripting */
    // const arr = ["a", "b", "c"];
    // const letterResult = document.getElementById("letterResult");
    // for (const letter of arr) {
    //     const li = document.createElement("li");
    //     li.textContent = letter;
    //     letterResult.appendChild(li);
    // };

    // console.log('letterResult: ', letterResult);

    /** Manually hand-rolling the iterator */
    const arr = ["a", "b", "c", "d", "e"];
    const arrIter = arr[Symbol.iterator]();
        
    // console.log('a: ', arrIter.next().value); // a
    // console.log('b: ', arrIter.next().value); // b
    // console.log('c: ', arrIter.next().value); // c
    // console.log('d: ', arrIter.next().value); // d
    // console.log('e: ', arrIter.next().value); // e
    // console.log('f: ', arrIter.next().value); // f --> undefines   
    for (i = 0; i < arr.length; i++) {
        console.log('item: ', arrIter.next().value);
        // c'item: ', arrIter.next().value);
    };
};

module.exports = {
    iterator
};