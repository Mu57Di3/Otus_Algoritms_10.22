/**
 * @file Сортировка пузырьком
 * Создан Bender 21.11.2022
 */

function bubbleSort(inputArray) {
    const array = [...inputArray];
    let swapped = false;

    for (let i = array.length; i >= 0; i--) {
        swapped = false;
        for (let j = 0; j < i; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                swapped = true;
            }
        }
        if (!swapped) {
            return array;
        }
    }

    return array;
}

module.exports = {bubbleSort}
