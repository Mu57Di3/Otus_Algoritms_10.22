/**
 * @file Класс загружающий файлы тестов и читающий данные
 * Создан Bender 08.11.2022
 */
const path = require("path");
const fs = require("fs");
const testFilesFolderName = "tests";

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
                if (keys.length) {
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

class TestFileWorker {
    constructor({rootDir, inParser, outParser}) {
        this.testPath = path.resolve(rootDir, testFilesFolderName);
        this.testFileTpl = /^test\.(\d{1,2})\.(in|out)$/s;
        this.fileList = [];
        this.inParser = inParser || this._defaultParser;
        this.outParser = outParser || this._defaultParser;
        this.testList = null;

    }

    _defaultParser(content){
        return content.trim();
    }

    _getFilesList() {
        this.fileList = fs.readdirSync(this.testPath, {encoding:"utf8"}).filter((file) => this.testFileTpl.test(file));
    }

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

    readTests() {
        this._getFilesList();
        this._getTestList();
    }
}

module.exports = TestFileWorker
