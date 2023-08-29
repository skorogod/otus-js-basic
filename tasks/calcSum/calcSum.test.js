const calcSum = require("./calcSum")

describe("calcSum", () => {
    it("check calcSum is a function", () => {
        expect(calcSum).toBeInstanceOf(Function);
    });

    it("check 5 + 7 = 12", () => {
        expect(calcSum(5, 7)).toBe(12);
    });
})