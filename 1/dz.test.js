/**
 * @file
 * Создан Bender 08.11.2022
 */

const TestFileWorker = require("../helpers/testFileWorker");
const {solveFast} = require("./solve");

describe("test", ()=>{
    const testHelper = new TestFileWorker({
        rootDir: __dirname,
        inParser: (content)=>{
            return parseInt(String.fromCharCode.apply(null, content).trim(), 10);
        },
        outParser: (content)=>{
            return parseInt(String.fromCharCode.apply(null, content).trim(), 10);
        },
    });
    testHelper.readTests();

    for (let testItem of testHelper.testList){
        test(testItem.name, ()=>{
            expect(solveFast(testItem.in)).toBe(testItem.out)
        })
    }
})
