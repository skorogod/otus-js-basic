const objectDestruct = require('./objectDestruct');

describe('objectDestruct', () => {
    let admin = {name: 'admin', role: 'admin'};

    test("check objectDestruct is a function", () => {
        expect(objectDestruct).toBeInstanceOf(Function);
    });

    test("return ['admin', 'admin']", () => {
        expect(objectDestruct(admin)).toStrictEqual(['admin', 'admin']);
    })
})