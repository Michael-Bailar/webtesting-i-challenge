const { succeed, fail, repair } = require('./enhancer.js');

const testItem1 = {
    name: "Iron Sword",
    enhancement: 14,
    durability: 50,
}
const testItem2 = {
    name: "Silver Sword",
    enhancement: 20,
    durability: 20,
}
const testItem3 = {
    name: "Steel Sword",
    enhancement: 15,
    durability: 20,
}
const testItem4 = {
    name: "Steel Dagger",
    enhancement: 2,
    durability: 4,
}
// test away!
describe("enhancer.js", () => {
    it("should run tests without errors", () => {
        expect(true).toBe(true)
    })

    describe(".succeed()", () => {
        it("should return a new item object with enhancement increased by 1", () => {
            const succeedItem1 = succeed(testItem1)
            expect(succeedItem1.enhancement).toBe(15)    
        })
        it("should return the same enhancement value it enhancement is >= 20", () => {
            const succeedItem2 = succeed(testItem2)
            expect(succeedItem2.enhancement).toBe(20)
        })
        it("should not change the item's durability", () => {
            const succeedItem1 = succeed(testItem1) 
            expect(succeedItem1.durability).toBe(50)
        })
    })

    describe(".fail()", () => {
        it("should return an item with durability reduced by 5 when ehnhancement is less than 15", () => {
            const failItem = fail(testItem1)
            expect(failItem.durability).toBe(45)
        })
        it("should return an item with durability equal to 0 when ehnhancement is less than 5", () => {
            const failItem = fail(testItem4)
            expect(failItem.durability).toBe(0)
        })
        it("should return an item with durability reduced by 10 when ehnhancement is >=  15", () => {
            const failItem2 = fail(testItem2)
            const failItem3 = fail(testItem3)
             expect(failItem2.durability).toBe(10)
             expect(failItem3.durability).toBe(5)
        })
        it("should return an item with enhancement reduced by 1 when ehnhancement is greater than 16", () => {
            const newItem2 = fail(testItem2)
            expect(newItem2.enhancement).toBe(19)
        })
    })

    describe(".repair()", () => {
        it("should return a new item object with durability equal to 100", () => {
            const repairItem1 = repair(testItem1)
            expect(repairItem1.durability).toBe(100)
        })
    })

})