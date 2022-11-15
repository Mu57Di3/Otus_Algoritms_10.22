/**
 * @file Реализация VectorArray
 * Создан Bender 15.11.2022
 */

class VectorArray {
    constructor(vector = 10) {
        this.vector = vector;
        this._array = [];
        this._size = 0;
    }

    /**
     * Возвращает размер массива
     * @return {number}
     */
    size() {
        return this._size;
    }

    /**
     * Добавляет новый элемент в конец массива
     * @param newItem
     */
    add(newItem) {
        if (this._size === this._array.length) {
            this._resize();
        }
        this._array[this._size] = newItem;
        this._size++;
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
        const newArray = new Array(this.size() + this.vector);

        this._array.forEach((value, index) => {
            newArray[index] = value;
        })

        this._array = newArray;
    }

    /**
     * Удаляет и возвращает удаленный элемент массива по индексу
     * @param {number} removeIndex - индекс элемента
     * @return {*}
     */
    remove(removeIndex) {
        const removedValue = this.get(removeIndex);
        const newArray = new Array(this._array.length - 1 < 0 ? 0 : this._array.length - 1);
        let indexDelta = 0;

        this._array.forEach((value, index) => {
            if (value !== undefined) {
                if (index !== removeIndex) {
                    newArray[index - indexDelta] = value;
                } else {
                    indexDelta = 1;
                }
            }
        })

        this._array = newArray;
        this._size--;

        return removedValue;
    }
}

module.exports = {
    VectorArray
}
