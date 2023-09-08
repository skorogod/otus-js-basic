const getSeconds = require('./secondsFromDayStart');

describe('getSeconds', () => {
    const logSpy = jest.spyOn(console, 'log');
    const dateNowSpy = jest.spyOn(Date, 'now');
    it('return ', () => {
        jest
            .useFakeTimers()
            .setSystemTime(new Date('2023-09-06T08:30:33'));
        getSeconds()
        expect(logSpy).toBeCalledWith('511');
    })
})