const calcMulti = require('./calcMulti');

describe("calcMulti", () => {
    it("check calcMulti is afunction", () => {
        expect(calcMulti).toBeInstanceOf(Function);
    }); 
    it("check 7 * 8 = 56", () => {
        expect(calcMulti(7,8)).toBe(56);
    });
});