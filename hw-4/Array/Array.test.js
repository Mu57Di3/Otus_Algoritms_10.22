/**
 * @file Тесты массивов
 * Создан Bender 15.11.2022
 */
const {NativeArray} = require("./NativeArray");
const {SingleArray} = require("./SingleArray");
const {VectorArray} = require("./VectorArray");
const {FactorArray} = require("./FactorArray");
const {MatrixArray} = require("./MatrixArray");

/**
 * Возвращает случайное целое число в промежутке min/max
 * @param {number} min
 * @param {number} max
 * @return {number}
 */
function random(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

const addCount = 100000;
const removeCount = 10000;//addCount-1;

const NA = new NativeArray();
const SA = new SingleArray();
const VA = new VectorArray();
const FA = new FactorArray();
const MA = new MatrixArray();

describe("Сравнительный тест реализация массивов", ()=>{

    testAdd("NativeArray add", NA, addCount);
    testAdd("SingleArray add", SA, addCount);
    testAdd("VectorArray add", VA, addCount);
    testAdd("FactorArray add", FA, addCount);
    testAdd("MatrixArray add", MA, addCount);

    testRemove("NativeArray remove", NA, removeCount);
    testRemove("SingleArray remove", SA, removeCount);
    testRemove("VectorArray remove", VA, removeCount);
    testRemove("FactorArray remove", FA, removeCount);
    testRemove("MatrixArray remove", MA, removeCount);

    function testAdd(name = "test", arr, count) {
        test(name, ()=>{
            for(let i = 0; i<count; i++) {
                arr.add(Date.now());
            }
        });
    }

    function testRemove(name, arr, count) {
        test(name, ()=>{
            for(let i = 0; i < count; i++) {
                arr.remove(random(0, arr.size()));
            }
        })
    }
})
