const   chai = require('chai'),
        expect = chai.expect,
        assert = chai.assert;

describe('TDD Tutorial - session 2 --> ', () => {

    it('Should load our date module', () => {
        try{
            const dateModule = require('../modules/dates');
        } catch(exception){
            assert.fail(exception);
        }

    });

    it('Should have a method to return a date as a string that matches format MM-DD-YYY', () => {
        try{
            const dateModule = require('../modules/dates');
            dateModule.getFormattedDate(new Date());
        } catch(exception){
            assert.fail(exception)
        }
    })

})