const arrayFirst = prompt("first array").split(" ")
const arraySecond = prompt("second array").split(" ")

/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
const sortNumber = (a, b) => a - b // sort array of number

arrayFirst.sort(sortNumber)

/**
 * @param {number} el
 * @param {Array} array
 * @return string|boolean
 */
// search el in array
const binarySearch = (el, array) => {
    if (array.length === 0) return false
    let start = 0
    let end = array.length - 1
    while (start <= end) {
        const middle = Math.floor((start + end) / 2)
        if (+array[middle] === el) {
            return true
        }
        if (array[middle] > el) {
            end = middle - 1
        } else {
            start = middle + 1
        }
    }
    return false
}

arraySecond.forEach(el => {
    const result = binarySearch(+el, arrayFirst)
    console.log(el, result ? "Да" : "Нет")
})