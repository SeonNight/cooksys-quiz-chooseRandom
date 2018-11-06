"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const chooseRandom = exports.chooseRandom = (array, numItems) => {
    console.log("--------------------------");
    console.log("--Choosing Random--");
    console.log("Original Array: ");
    console.log(array);
    console.log("Given Length: ");
    console.log(numItems);

    let randomIndices;
    let newArray;
    if (array === undefined) {
        console.log("Undefined Array");
        console.log(new Array());
        return new Array();
    }
    if (numItems === undefined || numItems < 1 || numItems > array.length) {
        //numItems should be 1 to arraylength
        numItems = Math.floor(Math.random() * array.length) + 1;
        if (array.length == 0) {
            numItems = 0;
        }
    }
    console.log("Length of Array: ");
    console.log(array.length);
    console.log("Length of random Array: ");
    console.log(numItems);
    newArray = new Array(numItems);

    if (array.length == 1) {
        newArray[0] = array[0];
        console.log("Array had the length of 1: ");
        console.log(newArray.length);
        console.log(newArray);
        //return newArray
        return array;
    } else if (array.length == 0) {
        console.log("Array had the length of 0: ");
        console.log(newArray.length);
        console.log(newArray);
        //return newArray
        return array;
    }

    randomIndices = new Array(numItems);

    console.log("Randomization");
    for (let i = 0; i < randomIndices.length; i++) {
        let index = Math.floor(Math.random() * array.length);
        while (randomIndices.includes(index)) {
            index = Math.floor(Math.random() * array.length);
        }
        console.log("--" + index);
        randomIndices[i] = index;
    }

    for (let i = 0; i < randomIndices.length; i++) {
        newArray[i] = array[randomIndices[i]];
    }

    console.log("New Random Array: ");
    console.log(newArray);

    console.log("--------------------------");
    console.log();
    return newArray;
};