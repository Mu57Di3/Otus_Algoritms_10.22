/**
 * @file Реализация на массивах и списках очереди с приоритетом
 * Создан Bender 17.11.2022
 */


class PriorityQueue {
    constructor() {
        this._priorityIndex = [];
        this._queue = new Map();
    }

    /**
     * Добавление данных в очередь
     * @param {number} priority - приоритет
     * @param {*} payload - данные
     * @return {boolean}
     */
    enqueue(priority, payload) {
        if (!this._queue.has(priority)) {
            this._priorityIndex.push(priority);
            this._priorityIndex = this._priorityIndex.sort().reverse();
            this._queue.set(priority, []);
        }
        this._queue.get(priority).push(payload);
        return true;
    }

    /**
     * Получение данных из очереди
     * @return {*}
     */
    dequeue() {
        const data = this._queue.get(this._priorityIndex[0]);
        const result = data && data.length ? data.shift() : undefined;

        if (data.length === 0) {
            this._queue.delete(this._priorityIndex[0]);
            this._priorityIndex.shift();
        }

        return result;
    }
}

module.exports = { PriorityQueue };
