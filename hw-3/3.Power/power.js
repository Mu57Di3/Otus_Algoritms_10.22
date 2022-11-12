/**
 * @file Реализация алгоритмов возведения в степень
 * Создан Bender 12.11.2022
 */

/**
 * Возведение в степень через двоичное разложение показателя степени
 * @param {number} value - число которое возводится в степень
 * @param {number} power - степень в которую возводим (только целые положительные числа)
 */
function powBinaryDecomposition (value, power) {
    let binPowValue = value;
    let result = 1;
    let divPower = power;

    while(divPower>=1){
        divPower = Math.floor(divPower/2);
        binPowValue = binPowValue * binPowValue;
        if(divPower%2 === 1){
            result = result * binPowValue;
        }
    }

    return result;
}



module.exports = {
    powBinaryDecomposition,
}
