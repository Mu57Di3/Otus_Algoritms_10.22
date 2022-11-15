/**
 * @file реализация FactorArray
 * Создан Bender 15.11.2022
 */


class FactorArray {
    constructor(factor = 50, initLength = 10) {
        this.factor = factor;
        this._size = 0;
        this._array = new Array(initLength);
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
        const newArray = new Array(this.size() + Math.floor(this.size() * (this.factor / 100)));

        this._array.forEach((value, index) => {
            newArray[index] = value;
        })

        this._array = newArray;
    }
}

module.exports = {FactorArray}
