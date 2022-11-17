/**
 * @file Вспомогательные функции
 * Создан Bender 17.11.2022
 */

/**
 * Возвращает случайное целое число в промежутке min/max
 * @param {number} min
 * @param {number} max
 * @return {number}
 */
function random(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

module.exports = {
    random
}
