//Given an array and a number, return a random subset of an array with the length of the given number
export const chooseRandom = (array, numItems) => {
    return (array === undefined) ?
        [] //If array is undefined return an empty array
        : (array.length < 2) ?
            array //If array has the length of 0 or 1 just return the array
            : array.slice().map((cur, ind, curArray) => { //Create a random array with given length
                return curArray.splice(Math.floor(Math.random() * (array.length - ind)) + ind,1,curArray[ind])[0]
                }).splice(0,(numItems === undefined || numItems < 1 || numItems > array.length) ?
                    Math.floor(Math.random() * array.length) + 1 //If given number is invalid return a number between 1 and array length
                    : numItems)
}