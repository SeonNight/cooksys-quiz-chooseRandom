//Given an array and a number, return a random subset of an array with the length of the given number
export const chooseRandom = (array, numItems) => {
    return (array === undefined) ?
        [] //If array is undefined return an empty array
        : (array.length < 2) ?
            array //If array has the length of 0 or 1 just return the array
            : randomShuffle(array, //If array has at least 1 elements Shuffle the array
                (numItems === undefined || numItems < 1 || numItems > array.length) ?
                    Math.floor(Math.random() * array.length) + 1 //If given number is invalid return a number between 1 and array length
                    : numItems) //if valid return given number

    //Given array and number (length)
    function randomShuffle(array, n) {
        //Get length of array
        let pos = array.length
        //Get a copy of array
        let copyArray = array.slice()

        //Go through and shuffle moving shuffled values to the back
        for(let i = array.length - 1; array.length - i <= n; i--) {
            copyArray[i] = copyArray.splice(Math.floor(Math.random() * pos--),1,copyArray[i])[0]
        }

        //return shuffled variables of the correct length
        return copyArray.splice(copyArray.length-n,n)
    }
}