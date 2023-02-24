const Employee = require('../lib/Employee');
const testE = new Employee("person", "1334", "generic@email")

describe('Employee', () => {
    it("can retrieve name from constructor", () => {
        expect(testE.name).toEqual("person");
        expect(testE.id).toEqual("1334")
        expect(testE.email).toEqual("generic@email")
    })
    it("getName() should return an employee name", () => {
        expect(testE.getName()).toEqual("person")
        expect(testE.getName()).not.toEqual("Jo")
    })
    it("getID() should return an employee ID", () => {
        expect(testE.getID()).toEqual("1334")
        expect(testE.getID()).not.toEqual("12")
    })
    it("getEmail() should return an employee email", () => {
        expect(testE.getEmail()).toEqual("generic@email")
        expect(testE.getEmail()).not.toEqual("whatever")
    })
    it("getRole() should return 'Employee'", () => {
        expect(testE.getRole()).toEqual('Employee')
        expect(testE.getRole()).not.toEqual('Emp')
    })
});