/**
 * @file
 * Создан Bender 12.11.2022
 */
const {matrixMultiply} = require("./Matrix");

/**
 * Вычисление числа Фибоначчи с помощью перемножения матриц
 * @param {number} n - номер числа
 * @return {BigInt}
 */
function fiboMatrix(n) {
    if (n === 0) {
        return 0n;
    }
    if (n === 1) {
        return  1n;
    }
    let constMatrix = [[1n,1n],[1n,0n]];
    let matrixMultipleResult = [[1n,1n],[1n,0n]];
    for(let i = 2; i<n; i++){
        matrixMultipleResult = matrixMultiply(matrixMultipleResult, constMatrix);
    }

    return matrixMultipleResult[0][0];
}

const gr = (1+Math.sqrt(5))/2;

/**
 * Вычисление числа Фибоначчи с помощью формулы золотого сечения
 * @param {number} n - номер числа
 * @return {BigInt}
 */
function fiboGoldenRatio(n) {
    return BigInt(Math.floor(Math.pow(gr, n)/Math.sqrt(5)+0.5));
}

module.exports = {
    fiboMatrix,
    fiboGoldenRatio
}
