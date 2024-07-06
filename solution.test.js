const { rescueChicken } = require('./solution');

describe('Constraint test', () => {

    test('should throw an error if empty string input', () => {
        expect(() => rescueChicken('')).toThrow();
    });

    test('should throw an error if total number of chickens and positions do not match', () => {
        expect(() => rescueChicken('5 5', '1 2 3 4')).toThrow();
    });

    test('should throw an error if any position less than 1', () => {
        expect(() => rescueChicken('5 5', '-2 -1 1 2 3')).toThrow();
    })

    test('should throw an error if positions are not in assending order', () => {
        expect(() => rescueChicken('5 5', '1 5 2 4 3')).toThrow();
    })

});

describe('Test case', () => {
    test('input [5 5],[2 5 10 12 15] , should return 2', () => {
        expect(rescueChicken('5 5', '2 5 10 12 15')).toBe(2);
    });

    test('input [6 10],[1 11 30 34 35 37] , should return 4', () => {
        expect(rescueChicken('6 10', '1 11 30 34 35 37')).toBe(4);
    });

    test('input [6 8],[1 11 30 34 35 37] , should return 4', () => {
        expect(rescueChicken('6 8', '1 11 30 34 35 37')).toBe(4);
    });

    test('input [6 7],[1 11 30 34 35 37] , should return 3', () => {
        expect(rescueChicken('6 7', '1 11 30 34 35 37')).toBe(3);
    });

    test('input [6 4],[1 11 30 34 35 37] , should return 3', () => {
        expect(rescueChicken('6 4', '1 11 30 34 35 37')).toBe(3);
    });

    test('input [6 3],[1 11 30 34 35 37] , should return 2', () => {
        expect(rescueChicken('6 3', '1 11 30 34 35 37')).toBe(2);
    });
});