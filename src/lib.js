export const chooseRandom = (array, numItems) => {
    
    console.log("--------------------------")
    console.log("--Choosing Random--")
    console.log("Original Array: ")
    console.log(array)
    console.log("NumItems: ")
    console.log(numItems)

    let randomIndices
    let newArray
    if(array === undefined) {
        console.log("Undefined Array")
        console.log(new Array())
        return new Array()
    }
    if(numItems === undefined || numItems < 1 || numItems > array.length) {
        //numItems should be 1 to arraylength
        numItems = Math.floor(Math.random() * array.length) + 1;
    }
    console.log("New NumItems: ")
    console.log(numItems)
    randomIndices = new Array(numItems)
    newArray = new Array(numItems)

    if(array.length == 1) {
        newArray[0] = array[0]
        console.log("randomIndices: ")
        console.log(randomIndices)
        return randomIndices
    } else if (array.length == 0) {
        console.log("randomIndeices: ")
        console.log(randomIndices)
        return randomIndices
    }

    console.log("Random")
    for(let i = 0; i < randomIndices.length; i++) {
        let index = Math.floor(Math.random() * array.length)
        while(randomIndices.includes(index)) {
            index = Math.floor(Math.random() * array.length)
        }
        console.log("--" + index)
        randomIndices[i] = index
    }

    for(let i = 0; i < randomIndices.length; i++) {
        newArray[i] = array[randomIndices[i]]
    }

    console.log("New Array: ")
    console.log(newArray)

    console.log("--------------------------")
    console.log()
    return newArray
}