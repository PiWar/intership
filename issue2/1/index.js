// массив в котором будет происходить поиск
const arrayOfHaystack = prompt("first array").split(" ")
// массив элементов для поиска
const arrayOfNeedles = prompt("second array").split(" ")

// сортируем входной массив для бинарного поиска
arrayOfHaystack.sort((a, b) => a - b)

/**
 * поиск элемента в массиве
 * @param {Number} needle - элемент, который будет искаться в массиве
 * @param {Array} haystack - массив, в котором будет производиться поиск
 * @return {Number} - индекс найденного элемента, иначе -1
 */
const binarySearch = (needle, haystack) => {
    if (haystack.length === 0) return -1
    let startPosition = 0
    let endPosition = haystack.length - 1
    while (startPosition <= endPosition) {
        const middlePosition = Math.floor((startPosition + endPosition) / 2)
        if (+haystack[middlePosition] === needle) {
            return middlePosition
        }
        if (haystack[middlePosition] > needle) {
            endPosition = middlePosition - 1
        } else {
            startPosition = middlePosition + 1
        }
    }
    return -1
}

// проходимся по элементам для поиска
arrayOfNeedles.forEach(needle => {
    // получаем результат поиска
    const result = binarySearch(+needle, arrayOfHaystack)
    console.log(needle, result !== -1 ? "Да" : "Нет")
})