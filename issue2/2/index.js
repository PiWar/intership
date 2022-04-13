/**
 * генерирует массив задаваемой длинны чисел от 0 до 100
 * @param {Number} length - длина генерируемого массива
 * @return {Array<Number>} - массив чисел заданной длины
 */
const getRandomArray = (length) => {
    const array = []
    for (let i = 0; i < length; i++) array.push(Math.floor(Math.random() * 100))
    return array;
}

/**
 * вычисляет время выполнения передаваемой функции
 * @param {Function} callback - функция для которой вычисляется время выполнения
 * @return {Number} - время выполнения в ms
 */
const getFuncExecutionTime = callback => {
    const startExecution = performance.now()
    callback()
    const endExecution = performance.now()
    return endExecution - startExecution
}

/**
 * меняет местами два элемента массива
 * @param {Array<Number>} array - массив в котором выполняется замена
 * @param {Number} i - индекс первого элемента для замены
 * @param {Number} j - индекс второго элемента для замены
 */
function swap(array, i, j) {
    [array[j], array[i]] = [array[i], array[j]]
}

/**
 * поиск минимального элемента в массиве начиная с заданного индекса
 * @param {Array<Number>} array - массив для поиска
 * @param {Number} startIndex - индекс начала массива с которого начинается поиск
 * @return {Number} - индекс минимального найденного элемента в массиве
 */
function findMinNumber(array, startIndex) {
    let minNumber = array[startIndex]
    let minNumberIndex = startIndex
    for (let i = startIndex; i < array.length; i++) {
        const arrayElement = array[i]
        if (minNumber > arrayElement) {
            minNumber = arrayElement
            minNumberIndex = i
        }
    }
    return minNumberIndex
}

/**
 * сортировка массива чисел методом выборки
 * @param {Array<Number>} array - массив чисел для сортировки
 */
function sortSelection(array) {
    if (!array.length) return
    for (let i = 0; i < array.length; i++) {
        const itemMinIndex = findMinNumber(array, i)
        swap(array, i, itemMinIndex)
    }
}

/**
 * сортировка массива чисел методом пузырька
 * @param {Array<Number>} array - массив чисел для сортировки
 */
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

// массив чисел для сортировки выборкой
const arrayForSortSelection = getRandomArray()
// копия массива для сортировки пузырьком
const arrayForSortBubble = arrayForSortSelection.slice()

// время выполнения сортировки выборкой
const executionTimeSelectionSort = getFuncExecutionTime(() => sortSelection(arrayForSortSelection))
// время выполнения сортировки пузырьком
const executionTimeBubbleSort = getFuncExecutionTime(() => sortBubble(arrayForSortBubble))

if (executionTimeBubbleSort > executionTimeSelectionSort) {
    console.log("сортировка выборкой быстрее")
} else {
    console.log("сортировка пузырьком быстрее")
}
console.log(`selection sort: ${executionTimeSelectionSort} ms; bubble sort: ${executionTimeBubbleSort} ms`)