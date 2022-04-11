function getRandomArray() {
    const array = []
    for (let i = 0; i < 5000; i++) array.push(Math.floor(Math.random() * 100))
    return array

}

function getExecutionTime(func) {
    const start = performance.now()
    func()
    const end = performance.now()
    return end - start
}

function swap(array, i, j) {
    [array[j], array[i]] = [array[i], array[j]]
}

function findMin(array, startIndex) {
    let currMin = array[startIndex]
    let currMinIndex = startIndex
    for (let i = startIndex; i < array.length; i++) {
        const item = array[i]
        if (currMin > item) {
            currMin = item
            currMinIndex = i
        }
    }
    return currMinIndex
}

function sortSelection(array) {
    if (!array.length) return
    for (let i = 0; i < array.length; i++) {
        const itemMinIndex = findMin(array, i)
        swap(array, i, itemMinIndex)
    }
}

function sortBubble(array) {
    if (!array.length) return
    let swapped = true;
    while (swapped) {
        swapped = false
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                swap(array, i, i + 1)
                swapped = true
            }
        }
    }
}

const testArray = getRandomArray()
const testArraySecond = testArray.slice()

const firstSortTime = getExecutionTime(() => sortSelection(testArray))
const secondSortTime = getExecutionTime(() => sortBubble(testArraySecond))

if (firstSortTime < secondSortTime) console.log("sort selection faster")
else console.log("sort bubble faster")
console.log(`selection: ${firstSortTime} ms, bubble: ${secondSortTime} ms`)

