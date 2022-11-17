/**
 * @file
 * Создан Bender 17.11.2022
 */
const {PriorityQueue} = require("./PriorityQueue");
const {random} = require("../../helpers/utils");


describe("Очередь с приоритетом ", ()=>{
    let queue = null;

    beforeEach(()=>{
        queue = new PriorityQueue();
    })

    afterEach(()=>{
        queue = null;
    })

    it("Добавление элемента в очередь", ()=>{
        expect(queue.enqueue(random(0,100), Date.now())).toBeTruthy();
    });

    it("Получение элемента из очереди", ()=>{
        const addValue = "test";
        queue.enqueue(1, addValue);

        expect(queue.dequeue()).toBe(addValue);
    })
})
