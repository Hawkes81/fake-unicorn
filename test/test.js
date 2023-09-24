const assert = require('assert');
const expect = require('chai').expect;
const should = require('chai').should();
const emptyOrRows = require('../helper.js').emptyOrRows;

describe('Helper', function () {
    describe('#emptyOrRows()', function () {
        context('without arguments', function () {
            it('should return empty array', function () {
                expect(emptyOrRows()).to.be.an('array').that.is.empty;
            })
        })

        context('with rows set', function () {
            it('should return rows value', function () {
                expect(emptyOrRows(5)).to.equal(5);
            })
        })


    });
});