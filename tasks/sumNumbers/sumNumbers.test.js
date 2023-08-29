const sumNumbers = require('./sumNumbers');


describe('sumNumbers', () => {
    test('sum numbers of 321 = 6', () => {
        jest.spyOn(window, 'prompt').mockReturnValue('321');
        expect(sumNumbers()).toBe(6);
    })
})