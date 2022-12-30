const router = require('express').Router();
const { Router } = require('express');
const { species, lengthDesc, iterateArray, shortenArray, fixedLengthArray, nonWritableArray } = require('../../controllers/built-in-objects/array/0.properties');
const { iterator } = require('../../controllers/built-in-objects/array/01.iterator');
const { atDesc, atReturnLastValue, atCompareMethods, atOnNonArrays } = require('../../controllers/built-in-objects/array/02.at()');
const { concatDesc, concatTwo, concatThree, concatValuesTo, concatNestedArrays, concatSpreadable, concatSparseArrays, concatNonArrays } = require('../../controllers/built-in-objects/array/03.concat()')
const { copyWithinDesc, copyWithinUse, copyWithinOnSparse, copyWithinOnNonArrays } = require('../../controllers/built-in-objects/array/04.copyWithin()');
const { entriesDesc, entriesWithIndexAndElement, entriesWithFor_Of_Loop, entriesWithSparseArrays, entriesWithNonArrays } = require('../../controllers/built-in-objects/array/05.entries()');
const { everyDesc, everyToTestAllElements, everyToTestArray, everyOnSparseArrays, everyToModifyArray, everyToAppendArray, everyToDeleteArray, everyOnNonArrays } = require('../../controllers/built-in-objects/array/06.every()');
const { fillDesc, fillUse, fillForMatrixOfAllOne, fillForEmptArray, fillOnNonArrays } = require('../../controllers/built-in-objects/array/07.fill()');
const { filterDesc, filterSmallValues, flterPrimeNumbers, filterInvalidEntries, filterSearchInArray, filterOnSparseArrays, filterOnNonArrays, filterToModifyArray, filterToAppendArray, filterToDeleteArray } = require('../../controllers/built-in-objects/array/08.filter()');
const { findDesc, findByProperties, findUsingArrowFunction, findAPrimeNumber, findOnSparseArrays, findOnNonArrays } = require('../../controllers/built-in-objects/array/09.find()');
const { findIndexDesc, findIndexOfPrimeNumber, findIndexOnSparseArrays, findIndexOnNonArrays } = require('../../controllers/built-in-objects/array/10.findIndex()');
const { findLastDesc, findLastMatchingProperty, findLastUsingArrowFunction, findLastPrimeNumber, findLastOnSparseArrays, findLastOnNonArrays } = require('../../controllers/built-in-objects/array/11.findLast()');
const { findLastIndexDesc, findLastIndexOfPrime, findLastIndexOnSparseArrays, findLastIndexOnNonArrays } = require('../../controllers/built-in-objects/array/12.findLastIndex()');
const { flatDesc, flatOnNestedArrays, flatOnSparseArrays, flatOnNonArrays } = require('../../controllers/built-in-objects/array/13.flat()');
const { flatMapDesc, flatMapExplicitIterate, flatMapComparison, flatMapOnSentences, flatMapToAddAndRemove, flatMapOnSparseArrays, flatMapOnNonArrays } = require('../../controllers/built-in-objects/array/14.flatMap()');
const { forEachDesc, forEachSyncDesc, forEachOnSparseArrays, forEachFromForLoop, forEachToPrint, forEachUsingThisArg, forEachToCopyObject, forEachToModifyArray, forEachToFlattenArray, forEachOnNonArrays } = require('../../controllers/built-in-objects/array/15.forEach()');
const { fromDesc, fromString, fromSet, fromMap, fromArrayLikeObjects, fromArrayFunctionsAndArray_From, fromUsingSequenceGenerator, fromUsingNonArrayConstructors } = require('../../controllers/built-in-objects/array/16.from()');
const { includesDesc, includesUses, includesWithGreaterFromIndex, includesWithComputedIndexLessThanZero, includesOnSparseArrays, includesOnNonArrays } = require('../../controllers/built-in-objects/array/19.includes()');
const { indexOfDesc, indexOfUses, indexOfAllOccurrences, indexOfCheckIfElementExists, indexOfOnSparseArrays, indexOfOnNonArrays } = require('../../controllers/built-in-objects/array/20.indexOf()');
const { isArrayDesc } = require('../../controllers/built-in-objects/array/21.isArray()');
const { joinDesc, joinOnSparseArrays, joinOnNonArrays } = require('../../controllers/built-in-objects/array/22.join()');
const { keysDesc, keysOnSparseArrays, keysOnNonArrays } = require('../../controllers/built-in-objects/array/23.keys()');
const { lastIndexOfDesc, lastIndexOfUses, lastIndexOfAllOccurrences, lastIndexOfOnSparseArrays, lastIndexOfOnNonArrays } = require('../../controllers/built-in-objects/array/24.lastIndexOf()');
const { mapDesc, mapOnSquareRoots, mapToReformatObjects, mapUsingFunctionWithArg, mapOnNonArrays, mapOnSparseArrays, mapWithParseInt, mapWithUndefineds } = require('../../controllers/built-in-objects/array/25.map()');
const { ofDesc, ofOnNonArrayConstructors } = require('../../controllers/built-in-objects/array/26.of()');
const { popDesc, popOnNonArrayObjects, popWithObjectInArrayLikeFashion } = require('../../controllers/built-in-objects/array/27.pop()');
const { pushDesc, pushMergingTwoArrays, pushOnNonArrays, pushWithObjectInArrayLikeFashion } = require('../../controllers/built-in-objects/array/28.push()');
const { reduceDesc, reduceWithoutInitial, reduceWithInitial, reduceObjectsInArray, reduceFlattenArrayOfArrays, reduceCountInstancesOfValues, reduceGroupObjectsByProperty, reduceConcatArraysInArrayOfObjects, reduceRemoveDuplicates, reduceReplaceFilter_Map, reduceRunPromisesInSequence, reduceEnablingPiping, reduceWithSparseArrays, reduceOnNonArrays } = require('../../controllers/built-in-objects/array/29.reduce()');
const { reduceRightDesc, reduceRightWithoutInitial, reduceRightWithInitial, reduceRightSumArrayValues, reduceRightFlattenArrays, reduceRightWithAsyncFunctions, reduceRightDiffWithReduce, reduceRightWithComposableFunctions, reduceRightWithSparseArrays, reduceRightOnNonArrays } = require('../../controllers/built-in-objects/array/30.reduceRight()');
const { reverseDesc, reverseWithoutMutatingArrays, reverseWithSparseArrays, reverseOnNonArrays } = require('../../controllers/built-in-objects/array/31.reverse()');
const { shiftDesc, shiftWithWhileLoop, shiftOnNonArrays } = require('../../controllers/built-in-objects/array/32.shift()');
const { sliceDesc, sliceUses, sliceOnNonArrays, sliceToConvertArrayLikeObjects, sliceWithSparseArrays } = require('../../controllers/built-in-objects/array/33.slice()');

/** properties */
router.get('/species', species);
router.get('/lengthDesc', lengthDesc);
router.get('/iterateArray', iterateArray);
router.get('/shortenArray', shortenArray);
router.get('/fixedLengthArray', fixedLengthArray);
router.get('/nonWriatbleArray', nonWritableArray);

/** methods */
/** ** iterator */
router.get('/iterator', iterator);
/** at() */
router.get('/atDesc', atDesc);
router.get('/atReturnLastValue', atReturnLastValue);
router.get('/atCompareMethods', atCompareMethods);
router.get('/atOnNonArrays', atOnNonArrays);
/** concat() */
router.get('/concatDesc', concatDesc);
router.get('/concatTwo', concatTwo);
router.get('/concatThree', concatThree);
router.get('/concatValuesTo', concatValuesTo);
router.get('/concatNestedArrays', concatNestedArrays);
router.get('/concatSpreadable', concatSpreadable);
router.get('/concatSparseArrays', concatSparseArrays);
router.get('/concatNonArrays', concatNonArrays);
/** copyWihtin() */
router.get('/copyWithinDesc', copyWithinDesc);
router.get('/copyWithinUse', copyWithinUse);
router.get('/copyWithinOnSparse', copyWithinOnSparse);
router.get('/copyWithinOnNonArrays', copyWithinOnNonArrays);
/** entries() */
router.get('/entriesDesc', entriesDesc);
router.get('/entriesWithIndexAndElement', entriesWithIndexAndElement);
router.get('/entriesWithFor_Of_Loop', entriesWithFor_Of_Loop);
router.get('/entriesWithSparseArrays', entriesWithSparseArrays);
router.get('/entriesWithNonArrays', entriesWithNonArrays);
/** every() */
router.get('/everyDesc', everyDesc);
router.get('/everyToTestAllElements', everyToTestAllElements);
router.get('/everyToTestArray', everyToTestArray);
router.get('/everyOnSparseArrays', everyOnSparseArrays);
router.get('/everyToModifyArray', everyToModifyArray);
router.get('/everyToAppendArray', everyToAppendArray);
router.get('/everyToDeleteArray', everyToDeleteArray);
router.get('/everyOnNonArrays', everyOnNonArrays);
/** fill() */
router.get('/fillDesc', fillDesc);
router.get('/fillUse', fillUse);
router.get('/fillForMatrixOfAllOne', fillForMatrixOfAllOne);
router.get('/fillForEmptArray', fillForEmptArray);
router.get('/fillOnNonArrays', fillOnNonArrays);
/** filter() */
router.get('/filterDesc', filterDesc);
router.get('/filterSmallValues', filterSmallValues);
router.get('/flterPrimeNumbers', flterPrimeNumbers);
router.get('/filterInvalidEntries', filterInvalidEntries);
router.get('/filterSearchInArray', filterSearchInArray);
router.get('/filterOnSparseArrays', filterOnSparseArrays);
router.get('/filterOnNonArrays', filterOnNonArrays);
router.get('/filterToModifyArray', filterToModifyArray);
router.get('/filterToAppendArray', filterToAppendArray);
router.get('/filterToDeleteArray', filterToDeleteArray);
/** find() */
router.get('/findDesc', findDesc);
router.get('/findByProperties', findByProperties);
router.get('/findUsingArrowFunction', findUsingArrowFunction);
router.get('/findAPrimeNumber', findAPrimeNumber);
router.get('/findOnSparseArrays', findOnSparseArrays);
router.get('/findOnNonArrays', findOnNonArrays);
/** findIndex() */
router.get('/findIndexDesc', findIndexDesc);
router.get('/findIndexOfPrimeNumber', findIndexOfPrimeNumber);
router.get('/findIndexOnSparseArrays', findIndexOnSparseArrays);
router.get('/findIndexOnNonArrays', findIndexOnNonArrays)
/** findLast() */
router.get('/findLastDesc', findLastDesc);
router.get('/findLastMatchingProperty', findLastMatchingProperty);
router.get('/findLastUsingArrowFunction', findLastUsingArrowFunction);
router.get('/findLastPrimeNumber', findLastPrimeNumber);
router.get('/findLastOnSparseArrays', findLastOnSparseArrays);
router.get('/findLastOnNonArrays', findLastOnNonArrays);
/** findLastIndex() */
router.get('/findLastIndexDesc', findLastIndexDesc);
router.get('/findLastIndexOfPrime', findLastIndexOfPrime);
router.get('/findLastIndexOnSparseArrays', findLastIndexOnSparseArrays);
router.get('/findLastIndexOnNonArrays', findLastIndexOnNonArrays);
/** flat() */
router.get('/flatDesc', flatDesc);
router.get('/flatOnNestedArrays', flatOnNestedArrays);
router.get('/flatOnSparseArrays', flatOnSparseArrays);
router.get('/flatOnNonArrays', flatOnNonArrays);
/** flatMap() */
router.get('/flatMapDesc', flatMapDesc);
router.get('/flatMapExplicitIterate', flatMapExplicitIterate);
router.get('/flatMapComparison', flatMapComparison);
router.get('/flatMapOnSentences', flatMapOnSentences);
router.get('/flatMapToAddAndRemove', flatMapToAddAndRemove);
router.get('/flatMapOnSparseArrays', flatMapOnSparseArrays);
router.get('/flatMapOnNonArrays', flatMapOnNonArrays);
/** forEach() */
router.get('/forEachDesc', forEachDesc);
router.get('/forEachSyncDesc', forEachSyncDesc);
router.get('/forEachOnSparseArrays', forEachOnSparseArrays);
router.get('/forEachFromForLoop', forEachFromForLoop);
router.get('/forEachToPrint', forEachToPrint);
router.get('/forEachUsingThisArg', forEachUsingThisArg);
router.get('/forEachToCopyObject', forEachToCopyObject);
router.get('/forEachToModifyArray', forEachToModifyArray);
router.get('/forEachToFlattenArray', forEachToFlattenArray);
router.get('/forEachOnNonArrays', forEachOnNonArrays);
/** from() */
router.get('/fromDesc', fromDesc);
router.get('/fromString', fromString);
router.get('/fromSet', fromSet);
router.get('/fromMap', fromMap);
router.get('/fromArrayLikeObjects', fromArrayLikeObjects);
router.get('/fromArrayFunctionsAndArray_From', fromArrayFunctionsAndArray_From);
router.get('/fromUsingSequenceGenerator', fromUsingSequenceGenerator);
router.get('/fromUsingNonArrayConstructors', fromUsingNonArrayConstructors);
/** group() */

/** groupToMap */

/** includes() */
router.get('/includesDesc', includesDesc);
router.get('/includesUses', includesUses);
router.get('/includesWithGreaterFromIndex', includesWithGreaterFromIndex);
router.get('/includesWithComputedIndexLessThanZero', includesWithComputedIndexLessThanZero);
router.get('/includesOnSparseArrays', includesOnSparseArrays);
router.get('/includesOnNonArrays', includesOnNonArrays);
/** indexOf() */
router.get('/indexOfDesc', indexOfDesc);
router.get('/indexOfUses', indexOfUses);
router.get('/indexOfAllOccurrences', indexOfAllOccurrences);
router.get('/indexOfCheckIfElementExists', indexOfCheckIfElementExists);
router.get('/indexOfOnSparseArrays', indexOfOnSparseArrays);
router.get('/indexOfOnNonArrays', indexOfOnNonArrays);
/** isArray() */
router.get('/isArrayDesc', isArrayDesc);
/** join() */
router.get('/joinDesc', joinDesc);
router.get('/joinOnSparseArrays', joinOnSparseArrays);
router.get('/joinOnNonArrays', joinOnNonArrays);
/** keys() */
router.get('/keysDesc', keysDesc);
router.get('/keysOnSparseArrays', keysOnSparseArrays);
router.get('/keysOnNonArrays', keysOnNonArrays);
/** lastIndexOf() */
router.get('/lastIndexOfDesc', lastIndexOfDesc);
router.get('/lastIndexOfUses', lastIndexOfUses);
router.get('/lastIndexOfAllOccurrences', lastIndexOfAllOccurrences);
router.get('/lastIndexOfOnSparseArrays', lastIndexOfOnSparseArrays);
router.get('/lastIndexOfOnNonArrays', lastIndexOfOnNonArrays);
/** map() */
router.get('/mapDesc', mapDesc);
router.get('/mapOnSquareRoots', mapOnSquareRoots);
router.get('/mapToReformatObjects', mapToReformatObjects);
router.get('/mapUsingFunctionWithArg', mapUsingFunctionWithArg);
router.get('/mapOnNonArrays', mapOnNonArrays);
router.get('/mapOnSparseArrays', mapOnSparseArrays);
router.get('/mapWithParseInt', mapWithParseInt);
router.get('/mapWithUndefineds', mapWithUndefineds);
/** of() */
router.get('/ofDesc', ofDesc);
router.get('/ofOnNonArrayConstructors', ofOnNonArrayConstructors);
/** pop() */
router.get('/popDesc', popDesc);
router.get('/popOnNonArrayObjects', popOnNonArrayObjects);
router.get('/popWithObjectInArrayLikeFashion', popWithObjectInArrayLikeFashion);
/** push() */
router.get('/pushDesc', pushDesc);
router.get('/pushMergingTwoArrays', pushMergingTwoArrays);
router.get('/pushOnNonArrays', pushOnNonArrays);
router.get('/pushWithObjectInArrayLikeFashion', pushWithObjectInArrayLikeFashion);
/** reduce() */
router.get('/reduceDesc', reduceDesc);
router.get('/reduceWithoutInitial', reduceWithoutInitial);
router.get('/reduceWithInitial', reduceWithInitial);
router.get('/reduceObjectsInArray', reduceObjectsInArray);
router.get('/reduceFlattenArrayOfArrays', reduceFlattenArrayOfArrays);
router.get('/reduceCountInstancesOfValues', reduceCountInstancesOfValues);
router.get('/reduceGroupObjectsByProperty', reduceGroupObjectsByProperty);
router.get('/reduceConcatArraysInArrayOfObjects', reduceConcatArraysInArrayOfObjects);
router.get('/reduceRemoveDuplicates', reduceRemoveDuplicates);
router.get('/reduceReplaceFilter_Map', reduceReplaceFilter_Map);
router.get('/reduceRunPromisesInSequence', reduceRunPromisesInSequence);
router.get('/reduceEnablingPiping', reduceEnablingPiping);
router.get('/reduceWithSparseArrays', reduceWithSparseArrays);
router.get('/reduceOnNonArrays', reduceOnNonArrays);
/** reduceRight() */
router.get('/reduceRightDesc', reduceRightDesc);
router.get('/reduceRightWithoutInitial', reduceRightWithoutInitial)
router.get('/reduceRightWithInitial', reduceRightWithInitial);
router.get('/reduceRightSumArrayValues', reduceRightSumArrayValues);
router.get('/reduceRightFlattenArrays', reduceRightFlattenArrays);
router.get('/reduceRightWithAsyncFunctions', reduceRightWithAsyncFunctions);
router.get('/reduceRightDiffWithReduce', reduceRightDiffWithReduce);
router.get('/reduceRightWithComposableFunctions', reduceRightWithComposableFunctions);
router.get('/reduceRightWithSparseArrays', reduceRightWithSparseArrays);
router.get('/reduceRightOnNonArrays', reduceRightOnNonArrays);
/** reverse()  */
router.get('/reverseDesc', reverseDesc);
router.get('/reverseWithourMutatingArrays', reverseWithoutMutatingArrays);
router.get('/reverseWithSparseArrays', reverseWithSparseArrays);
router.get('/reverseOnNonArrays', reverseOnNonArrays);
/** shift() */
router.get('/shiftDesc', shiftDesc);
router.get('/shiftWithWhileLoop', shiftWithWhileLoop);
router.get('/shiftOnNonArrays', shiftOnNonArrays);
/** slice() */
router.get('/sliceDesc', sliceDesc);
router.get('/sliceUses', sliceUses);
router.get('/sliceOnNonArrays', sliceOnNonArrays);
router.get('/sliceToConvertArrayLikeObjects', sliceToConvertArrayLikeObjects);
router.get('/sliceWithSparseArrays', sliceWithSparseArrays);

module.exports = router;