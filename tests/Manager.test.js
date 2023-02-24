const Manager = require('../lib/Manager')
const testMan = new Manager("person", "1234", "generic@email", 1234)

describe ('Manager', () => {
    it("can retrieve a number from constructor", () => {
        expect(testMan.officeNumber).toEqual(1234)
        expect(testMan.officeNumber).not.toEqual("string")
    })
    it("getRole() should return 'Manager'", () => {
        expect(testMan.getRole()).toEqual("Manager")
        expect(testMan.getRole()).not.toEqual("whatever")
    })
})