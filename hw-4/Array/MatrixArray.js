/**
 * @file Реализация MatrixArray
 * Создан Bender 15.11.2022
 */
const {SingleArray} = require("./SingleArray");
const {VectorArray} = require("./VectorArray");

class MatrixArray {
    constructor(vector = 10) {
        this.vector = vector;
        this._array = new SingleArray();
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
        if (this._size === this._array.size() * this.vector) {
            this._array.add(new VectorArray(this.vector));
        }
        this._array.get(Math.floor(this._size / this.vector)).add(newItem);
    }

    /**
     * Возвращает элемент массива
     * @param {number} index - индекс элемента
     * @return {*}
     */
    get(index) {
        return this._array.get(Math.floor(index / this.vector)).get(index % this.vector);
    }
}

module.exports = {MatrixArray};
