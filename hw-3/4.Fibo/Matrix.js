/**
 * @file Реализация умножения матриц
 * Создан Bender 12.11.2022
 */

/**
 * Умножение матриц
 * @param {(number[]|BigInt)[]} matrix1
 * @param {(number[])|BigInt[]} matrix2
 * @return {(number[]|BigInt)[]|Error}
 */
function matrixMultiply(matrix1, matrix2) {
    if (matrix1.length !== matrix2[0].length) {
        throw new Error("Матрицы не согласованны");
    }
    const resultMatrix = [];

    for (let matrix1Row = 0; matrix1Row < matrix1.length; matrix1Row++) {
        const resultRow = [];
        for (let matrix2Col = 0; matrix2Col< matrix2[0].length; matrix2Col++) {
            let m = 0n;
            for (let matrix1Col =0; matrix1Col < matrix1[0].length; matrix1Col++) {
                m += matrix1[matrix1Row][matrix1Col]*matrix2[matrix1Col][matrix2Col];
            }
            resultRow.push(m);
        }
        resultMatrix.push(resultRow);
    }

    return resultMatrix;
}

//console.table(matrixMultiply([[1,2,2],[3,1,1]],[[4,2],[3,1],[1,5]]))
//console.table(matrixMultiply([[4,2],[3,1],[1,5]],[[1,2,2],[3,1,1]]))

module.exports = {
    matrixMultiply
}
