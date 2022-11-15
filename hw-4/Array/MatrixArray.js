/**
 * @file Реализация MatrixArray
 * Создан Bender 15.11.2022
 */
const {SingleArray} = require("./SingleArray");
const {VectorArray} = require("./VectorArray");
const {FactorArray} = require("./FactorArray");

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
            this._array.add(new FactorArray(this.vector));
        }
        this._array.get(Math.floor(this._size / this.vector)).add(newItem);
        this._size++;
    }

    /**
     * Возвращает элемент массива
     * @param {number} index - индекс элемента
     * @return {*}
     */
    get(index) {
        return this._array.get(Math.floor(index / this.vector)).get(index % this.vector);
    }

    /**
     * Удаляет и возвращает удаленный элемент массива по индексу
     * @param {number} removeIndex - индекс элемента
     * @return {*}
     */
    remove(removeIndex) {
        const removedValue = this.get(removeIndex);
        const frameIndex =Math.floor(removeIndex / this.vector);

        this._array.get(frameIndex).remove(removeIndex % this.vector);

        if (this._array.get(frameIndex).size() === 0) {
            this._array.remove(frameIndex);
        } else {
            for(let singleIndex = frameIndex; singleIndex < this._array.size()-1 ; singleIndex++){
                this._array.get(singleIndex).add(this._array.get(singleIndex+1).get(0));
                this._array.get(singleIndex+1).remove(0);
            }
        }

        this._size--;

        return removedValue;
    }
}

/*const a = new MatrixArray();

for(let i=1; i<=100; i++){
    a.add(i);
}

a.remove(37);*/


module.exports = {MatrixArray};
