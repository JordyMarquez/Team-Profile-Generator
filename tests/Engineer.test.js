const Engineer = require('../lib/Engineer')
const testEng = new Engineer("person", "1234", "generic@email", "githubUsername")

describe ('Engineer', () => {
    it("can retrieve githubUsername from constructor", () => {
        expect(testEng.githubUsername).toEqual("githubUsername")
    })
    it("getGithub() should return engineer github", () => {
        expect(testEng.getGithub()).toEqual("githubUsername")
        expect(testEng.getGithub()).not.toEqual("somethingelse")
    })
    it("getRole() should return 'Engineer'", () => {
        expect(testEng.getRole()).toEqual("Engineer")
        expect(testEng.getRole()).not.toEqual("whatever")
    })
})