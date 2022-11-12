/**
 * @file тесты для функций возведения в степень
 * Создан Bender 12.11.2022
 */
const {powBinaryDecomposition} = require("./power");
const TestFileWorker = require("../../helpers/testFileWorker");

describe("Возведение в степень через двоичное разложение показателя степени", ()=>{
    const testHelper = new TestFileWorker({
        rootDir: __dirname,
        inParser: function (content) {
            return content.split("\n").filter((item)=> item.trim() !== "" ).map((num)=>Number(num.trim()));
        },
        outParser: function (content) {
            return Number(content);
        }
    })
    for (let testItem of testHelper.testList) {
        test(testItem.name, ()=>{
            const [number, power] = testItem.in;
            expect(powBinaryDecomposition(number, power)).toBe(testItem.out);
        })
    }
})
