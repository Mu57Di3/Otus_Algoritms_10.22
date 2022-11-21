/**
 * @file
 * Создан Bender 21.11.2022
 */
const TestFileWorker = require("../../helpers/testFileWorker");
const {bubbleSort} = require("./bubble");
const {insertionSortBS} = require("./insertion");
const {shellSort} = require("./shell");

function loadTest() {
    return new TestFileWorker({
        rootDir: __dirname,
        inParser: function (content) {
            return content.split("\n")[1].trim().split(",").map((item) => parseInt(item, 10));
        },
        outParser: function (content) {
            return content.split(",").map((item) => parseInt(item, 10));
        }
    })
}

describe("пузырьковая", () => {
    const testHelper = loadTest();

    for (let testItem of testHelper.testList) {
        test(`size: ${testItem.in.length}`, () => {
            expect(bubbleSort(testItem.in)).toStrictEqual(testItem.out);
        })
    }
})

describe("Вставкой", () => {
    const testHelper = loadTest();

    for (let testItem of testHelper.testList) {
        test(`size: ${testItem.in.length}`, () => {
            expect(insertionSortBS(testItem.in)).toStrictEqual(testItem.out);
        })
    }
})

describe("Шелл", () => {
    const testHelper = loadTest();

    for (let testItem of testHelper.testList) {
        test(`size: ${testItem.in.length}`, () => {
            expect(shellSort(testItem.in)).toStrictEqual(testItem.out);
        })
    }
})



