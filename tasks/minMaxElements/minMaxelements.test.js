const minMaxElements = require('./minMaxElements');

describe('minMaxElements', () => {
    const log = console.log;

    beforeAll(() => {
        console.log = jest.fn();
    });

    afterAll(() => {
        console.log = log;
    });


    test('min is 2 max is 25 for [6,20,12,4,2,25]', () => {
        let arr = [6,20,12,4,2,25];
        minMaxElements(arr);
        expect(console.log).toHaveBeenCalledWith('min = 2, max = 25');
    })
})