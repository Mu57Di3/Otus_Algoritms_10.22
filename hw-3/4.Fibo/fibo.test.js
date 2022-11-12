/**
 * @file тест вычисления числе фибоначи
 * Создан Bender 12.11.2022
 */

const TestFileWorker = require("../../helpers/testFileWorker");
const {fiboMatrix, fiboGoldenRatio} = require("./fibo");

describe("Вычисление чисел фибоначи перемножение матриц", ()=>{
    const testHelper = new TestFileWorker({
        rootDir: __dirname,
        inParser: (content)=>{
            return parseInt(content, 10);
        },
        outParser: (content)=>{
            return BigInt(content);
        },
    });

    for (let testItem of testHelper.testList) {
        test(testItem.name, ()=>{
            expect(fiboMatrix(testItem.in)).toBe(testItem.out);
        })
    }
})

describe("Вычисление чисел фибоначи формула золтого сечения", ()=>{
    const testHelper = new TestFileWorker({
        rootDir: __dirname,
        inParser: (content)=>{
            return parseInt(content, 10);
        },
        outParser: (content)=>{
            return BigInt(content);
        },
    });

    for (let testItem of testHelper.testList) {
        test(testItem.name, ()=>{
            expect(fiboGoldenRatio(testItem.in)).toBe(testItem.out);
        })
    }
})
