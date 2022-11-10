/**
 * @file Решение второй домашней работы
 * Создан Bender 08.11.2022
 */

/**
 * находит количество "счастливых билетиков" для заданной размерности
 * @param {number} n - количество цифр в одной половине "счастливого билетика"
 * @return {BigInt}
 */
function solveFast(n) {
    const calcArray = [];

    for (let digitCount = 0; digitCount < n; digitCount++) {
        const nCount = [];
        for (let sum = 0; sum <= (digitCount + 1) * 9; sum++) {
            if (digitCount === 0) {
                nCount.push(1n);
            } else {
                let totalSum = 0n;
                for (let digit = 0; digit <= 9; digit++) {
                    if (digit <= sum) {
                        totalSum += calcArray[digitCount - 1][sum - digit] || 0n;
                    }
                }
                nCount.push(totalSum);
            }
        }
        calcArray.push(nCount);
    }

    return calcArray[n - 1].reduce((sum, i) => {
        sum += (i * i)
        return sum;
    }, 0n);
}

module.exports = {
    solveFast
}
