const { test, expect } = require('@jest/globals');
const { sum } = require('../calculator');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});
