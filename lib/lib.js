"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const chooseRandom = exports.chooseRandom = (array, numItems) => {
    //If array is undefined return an empty array
    if (array === undefined) {
        return [];
    }
    //If the number given is invalid get a new random number
    if (numItems === undefined || numItems < 1 || numItems > array.length) {
        //numItems should be 1 to arraylength
        numItems = Math.floor(Math.random() * array.length) + 1;
        if (array.length == 0) {
            numItems = 0;
        }
    }
    //If the array length is less than 2 (1 or 0) just return
    //  the given array
    if (array.length < 2) {
        return array;
    }

    //Array to store the random array
    let newArray = new Array(numItems);
    //Array to store random index numbers
    let randomIndices = new Array(numItems);

    //Get the random indexes
    for (let i = 0; i < randomIndices.length; i++) {
        randomIndices[i] = () => {
            let index = Math.floor(Math.random() * array.length);
            while (randomIndices.includes(index)) {
                //Just increment
                index++;
                if (index >= array.length) {
                    index = 0;
                }
            }
            return index;
        };
        /*
        //get a random number
        let index = Math.floor(Math.random() * array.length)
        //If there is a repeat index get a new number
        while(randomIndices.includes(index)) {
            //Just increment
            index++
            if(index >= array.length) {
                index = 0
            }
        }
        //store the index
        randomIndices[i] = index*/
    }

    //Put the values into the new random array using the random indices
    for (let i = 0; i < randomIndices.length; i++) {
        newArray[i] = array[randomIndices[i]];
    }

    //return the new random array
    return newArray;
};