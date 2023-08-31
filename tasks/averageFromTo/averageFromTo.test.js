const averageFromTo = require("./averageFromTo");


describe("averageFromTo", () => {
    it("check averageFromTo is a function", () => {
        expect(averageFromTo).toBeInstanceOf(Function);
    }); 

    it("average from 1 to 5 = 9", () => {
        jest.spyOn(window, 'prompt').mockReturnValue('5');
        expect(averageFromTo()).toBe(3);
    });
});