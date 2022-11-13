/**
 * @file Поиск простых чисел
 * Создан Bender 13.11.2022
 */

/**
 * поиск просты чисел с помощью алгоритма "решето Эратосфена"
 * @param {number} maxNumber - Максимальная граница поиска
 */
function findPrimesEratosthenes(maxNumber) {
    const isComposite = new Array(maxNumber + 1).fill(false);

    for (let i = 4; i <= maxNumber; i = i + 2) {
        isComposite[i] = true;
    }

    let nextPrime = 3;
    while (nextPrime <= Math.sqrt(maxNumber)) {
        for (let i = nextPrime * 2; i <= maxNumber; i = i + nextPrime) {
            isComposite[i] = true;
        }

        nextPrime = nextPrime + 2;
        while (nextPrime <= maxNumber && isComposite[nextPrime]) {
            nextPrime = nextPrime + 2;
        }
    }

    const primes = [];
    for (let i = 2; i <= maxNumber; i++) {
        if (!isComposite[i]) {
            primes.push(i);
        }
    }

    return primes;
}

module.exports = {
    findPrimesEratosthenes,
}
