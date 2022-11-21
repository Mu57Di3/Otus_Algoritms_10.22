/**
 * @file Сортировка вставкой
 * Создан Bender 21.11.2022
 */


/**
 * Классическая реализация
 * @param inputArray
 * @return {*[]}
 */
function insertionSort(inputArray) {
    const array = [...inputArray];

    for (let i = 0; i < array.length; i++) {
        let currentIndex = i;

        while (array[currentIndex - 1] !== undefined && array[currentIndex] < array[currentIndex - 1]) {
            [
                array[currentIndex - 1],
                array[currentIndex],
            ] = [
                array[currentIndex],
                array[currentIndex - 1],
            ];

            currentIndex--;
        }
    }

    return array;
}

/**
 * С бинарным поиском места вставки
 * @param inputArray
 * @return {*[]}
 */
function insertionSortBS(inputArray) {
    const array = [...inputArray];

    for (let i = 1; i < array.length; i++) {
        let val = array[i];
        let lo = 0;
        let hi = i;

        while (lo < hi) {
            let mid = Math.floor(lo + (hi - lo) / 2);
            if (val < array[mid]) {
                hi = mid;
            } else {
                lo = mid + 1;
            }
        }
        for (let j = i; j > lo; j--) {
            array[j] = array[j - 1];
        }
        array[lo] = val;
    }
    return array;
}

module.exports = {insertionSort, insertionSortBS}
