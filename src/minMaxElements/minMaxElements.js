function minMaxElements(arr){
    arr = arr.sort((a, b) =>  a-b)
    console.log(`min = ${arr[0]}, max = ${arr[arr.length - 1]}`)
}

module.exports = minMaxElements;