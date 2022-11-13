/**
 * @file
 * Создан Bender 13.11.2022
 */
const TestFileWorker = require("../../helpers/testFileWorker");
const {findPrimesEratosthenes} = require("./primes");



describe("Вычисление чисел фибоначи перемножение матриц", ()=>{
    const testHelper = new TestFileWorker({
        rootDir: __dirname,
        inParser: (content)=>{
            return parseInt(content, 10);
        },
        outParser: (content)=>{
            return parseInt(content, 10);
        },
    });

    for (let testItem of testHelper.testList) {
        test(testItem.name, ()=>{
            expect(findPrimesEratosthenes(testItem.in).length).toBe(testItem.out);
        })
    }
})
