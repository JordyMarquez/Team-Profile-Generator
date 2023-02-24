const Intern = require('../lib/Intern')
const testInt = new Intern("person", "1234", "generic@email", "UCSF")

describe ('Intern', () => {
    it("can retrieve school from constructor", () => {
        expect(testInt.school).toEqual("UCSF")
    })
    it("getSchool() should return the school of the intern", () => {
        expect(testInt.getSchool()).toEqual("UCSF")
        expect(testInt.getSchool()).not.toEqual("somethingelse")
    })
    it("getRole() should return 'Intern'", () => {
        expect(testInt.getRole()).toEqual("Intern")
        expect(testInt.getRole()).not.toEqual("whatever")
    })
})