const assert = require('assert');
const Calc = require('./index.js');

describe('Unit test', function () {

    it('Функція ATaylorCh існує', function(){
        assert.equal(typeof Calc.ATaylorCh, "function");
    });
    it('Has to be equal to ch (2) if steps number are 4', function () {
        assert.equal(Calc.ATaylorCh(2, 4), 3.7619);
    })
});