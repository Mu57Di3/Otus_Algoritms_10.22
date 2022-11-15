/**
 * @file Тесты массивов
 * Создан Bender 15.11.2022
 */
const {NativeArray} = require("./NativeArray");
const {SingleArray} = require("./SingleArray");
const {VectorArray} = require("./VectorArray");
const {FactorArray} = require("./FactorArray");
const {MatrixArray} = require("./MatrixArray");

describe("Сравнительный тест реализация массивов", ()=>{
    const count = 100000;

    testAdd("NativeArray", new NativeArray(), count);
    testAdd("SingleArray", new SingleArray(), count);
    testAdd("VectorArray", new VectorArray(), count);
    testAdd("FactorArray", new FactorArray(), count);
    testAdd("MatrixArray", new MatrixArray(), count);

    function testAdd(name = "test", arr, count) {
        test(name, ()=>{
            for(let i = 0; i<count; i++) {
                arr.add(Date.now());
            }
        });
    }
})
