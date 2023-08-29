const sumNumbers = require('./sumNumbers');

describe('sumNumbers', () => {
    const logSpy = jest.spyOn(console, 'log');

    it("check sumNumbers is afunction", () => {
        expect(sumNumbers).toBeInstanceOf(Function);
    }); 

    test('sum numbers of 321 = 6', () => {
        jest.spyOn(window, 'prompt').mockReturnValue('321');
        sumNumbers('321');
        expect(logSpy).toHaveBeenCalledWith(6);
    })
})