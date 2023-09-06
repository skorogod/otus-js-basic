const getWeekDay = require('./getWeekDay');

describe('getWeekDay', () => {
    it('return Wendsday for 23.08.2023', () => {
        jest.spyOn(window, 'prompt').mockReturnValue('23.08.2023')
        expect(getWeekDay()).toBe('Wednesday');
    })
})