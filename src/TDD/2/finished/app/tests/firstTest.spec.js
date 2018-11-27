const   chai = require('chai'),
        expect = chai.expect,
        assert = chai.assert;

describe('TDD Tutorial - session 2 --> ', () => {

    it('Should load our date module', () => {
        try{
            const dateModule = require('./modules/date.js');
        } catch(exception){
            assert.fail(exception);
        }

    });

})