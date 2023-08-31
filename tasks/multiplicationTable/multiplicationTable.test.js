const multiplicationTable = require('./multiplicationTable');


describe('multiplicationTable', () => {
    const logSpy = jest.fn();

    it("multiplicationTable is a function", () => {
        expect(multiplicationTable).toBeInstanceOf(Function);
    }); 

    test('log multiplication table for 7', () => {
        console.log = jest.fn();
        multiplicationTable();
        expect(console.log).toHaveBeenNthCalledWith(1, `7 x 1 = 7`);
        expect(console.log).toHaveBeenNthCalledWith(2, `7 x 2 = 14`);
        expect(console.log).toHaveBeenNthCalledWith(3, `7 x 3 = 21`);
        expect(console.log).toHaveBeenNthCalledWith(4, `7 x 4 = 28`);
        expect(console.log).toHaveBeenNthCalledWith(5, `7 x 5 = 35`);
        expect(console.log).toHaveBeenNthCalledWith(6, `7 x 6 = 42`);
        expect(console.log).toHaveBeenNthCalledWith(7, `7 x 7 = 49`);
        expect(console.log).toHaveBeenNthCalledWith(8, `7 x 8 = 56`);
        expect(console.log).toHaveBeenNthCalledWith(9, `7 x 9 = 63`);
    })
})