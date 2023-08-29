const calcSymbolsSum = require('./calcSymbolsSum');

describe("calcSymbolsSum", () => {
    test("check car + bike symbols length = 7", () => {
        expect(calcSymbolsSum('car', 'bike')).toBe(7);
    });
    test("check car + 1 returns 'bot params must be a string'", 
            () => {
                expect(calcSymbolsSum('car', 1)).toBe('bot params must be a string');
            })
})