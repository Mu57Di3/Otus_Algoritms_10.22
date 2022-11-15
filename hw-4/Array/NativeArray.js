/**
 * @file реализация на родных динамических массивах для сравнения в тестах
 * Создан Bender 15.11.2022
 */

class NativeArray {
    constructor() {
        this._array = [];
    }

    /**
     * Возвращает размер массива
     * @return {number}
     */
    size(){
        return this._array.length;
    }

    /**
     * Добавляет новый элемент в конец массива
     * @param newItem
     */
    add(newItem){
        this._array.push(newItem);
    }

    /**
     * Возвращает элемент массива
     * @param {number} index - индекс элемента
     * @return {*}
     */
    get(index) {
        return this._array[index];
    }


    /**
     * Удаляет и возвращает удаленный элемент массива по индексу
     * @param {number} index - индекс элемента
     * @return {*}
     */
    remove(index) {
        const removedValue = this._array[index];
        this._array.splice(index, 1);;
        return removedValue;
    }
}

module.exports = {
    NativeArray
}
