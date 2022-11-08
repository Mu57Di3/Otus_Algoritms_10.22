/**
 * @file Класс загружающий файлы тестов и читающий данные
 * Создан Bender 08.11.2022
 */
const path = require("path");
const fs = require("fs");
const testFilesFolderName = "tests";

/**
 * Итератор для списка тестов
 */
class IterableTestList extends Object {
    constructor(object) {
        super();
        Object.assign(this, object);
    }

    [Symbol.iterator](){
        const self = this;
        const keys = Object.keys(this);
        let current = keys.shift();
        return {
            next() {
                if (!!current) {
                    const key = current;
                    current = keys.shift();
                    return {
                        done: false,
                        value: self[key],
                    }
                } else {
                    return {
                        done: true,
                    }
                }
            }
        }
    }
}

/**
 * Класс читающий и парсящий файлы тестов
 */
class TestFileWorker {

    /**
     * @constructor
     * @param {string} rootDir - абсолютный путь до файла с тестом
     * @param {function} inParser - функция которая читает и преобразовывает входные параметры для теста
     * @param {function} outParser - функция которая читает и преобразовывает контрольные данные
     */
    constructor({rootDir, inParser, outParser}) {
        this.testPath = path.resolve(rootDir, testFilesFolderName);
        this.testFileTpl = /^test\.(\d{1,2})\.(in|out)$/s;
        this.fileList = [];
        this.inParser = inParser || this._defaultParser;
        this.outParser = outParser || this._defaultParser;
        this.testList = null;
        this._getFilesList();
        this._getTestList();
    }

    /**
     * Функция по умолчанию для обработки данных тестов. Если не указаны параметры  inParser, outParser
     * @param content
     * @return {*|string}
     * @private
     */
    _defaultParser(content){
        return content.trim();
    }

    /**
     * Возвращает список файлов в папке с тестом
     * @private
     */
    _getFilesList() {
        this.fileList = fs.readdirSync(this.testPath, {encoding:"utf8"}).filter((file) => this.testFileTpl.test(file));
    }

    /**
     * формирует итерируемы объект со списком тестов
     * @private
     */
    _getTestList(){
        const testList = {};

        this.fileList.forEach((file)=>{
            const fileinfo = this.testFileTpl.exec(file);
            const testName = `test-${fileinfo[1]}`;
            const fileType = String(fileinfo[2]).toLocaleLowerCase();
            if ( !testList[testName] ) {
                testList[testName] = {
                    name: testName,
                }
            }
            let content = fs.readFileSync(path.resolve(this.testPath, file)).toString();
            content = fileType === "out" ? this.outParser(content) : this.inParser(content);
            testList[testName][fileType]= content;
        });

        this.testList = new IterableTestList(testList);
    }
}

module.exports = TestFileWorker
