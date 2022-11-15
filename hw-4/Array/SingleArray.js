/**
 * @file реализация SingleArray
 * Создан Bender 15.11.2022
 */

class SingleArray {
    constructor() {
        this._array = [];
    }

    /**
     * Возвращает размер массива
     * @return {number}
     */
    size() {
        return this._array.length;
    }

    /**
     * Добавляет новый элемент в конец массива
     * @param newItem
     */
    add(newItem) {
        this._resize()
        this._array[this.size() - 1] = newItem;
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
     * Изменяет размер массива
     * @private
     */
    _resize() {
        const newArray = new Array(this.size() + 1).fill(null);

        this._array.forEach((value, index) => {
            newArray[index] = value;
        })

        this._array = newArray;

        //Еще можно так как это сильно быстрей
        //this._array = this._array.concat([null]);
    }

    /**
     * Удаляет и возвращает удаленный элемент массива по индексу
     * @param {number} removeIndex - индекс элемента
     * @return {*}
     */
    remove(removeIndex) {
        const removedValue = this.get(removeIndex);
        const newArray = new Array(this.size() - 1 < 0 ? 0 : this.size() - 1).fill(null);
        let indexDelta = 0;

        this._array.forEach((value, index) => {

            if (index !== removeIndex) {
                newArray[index - indexDelta] = value;
            } else {
                indexDelta = 1;
            }
        })

        this._array = newArray;

        return removedValue;
    }
}

module.exports = {
    SingleArray,
}
