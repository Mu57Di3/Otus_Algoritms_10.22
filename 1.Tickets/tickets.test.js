/**
 * @file тесты для второй домашней работы
 * Создан Bender 08.11.2022
 */

const TestFileWorker = require("../helpers/testFileWorker");
const {solveFast} = require("./tickets.js");

describe("Вторая домашняя работа \"Счастливые билетики\"", ()=>{
    const testHelper = new TestFileWorker({
        rootDir: __dirname,
        inParser: (content)=>{
            return parseInt(content, 10);
        },
        outParser: (content)=>{
            return BigInt(content);
        },
    });

    for (let testItem of testHelper.testList){
        test(testItem.name, ()=>{
            expect(solveFast(testItem.in)).toBe(testItem.out)
        })
    }
})
