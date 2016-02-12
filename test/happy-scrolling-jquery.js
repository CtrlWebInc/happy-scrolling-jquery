var assert = require('assert');

describe('generateLinearFunction', function() {

    it('p1(0, 1) p2(2, 5) f(x) -> f(3) = 7', function () {
        var p1 = {x:0, y:1},
            p2 = {x:2, y:5};
        assert.equal(7, generateLinearFunction(p1, p2)(3));

    });

});