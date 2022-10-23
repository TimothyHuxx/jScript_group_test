//const test_data = require ('../test_data/test_data.json')
const polyndrom = require('../src/Polyndrom_Func_Vik.js')
const expect = require ("chai").expect;
//New Comments

describe('Test suit for checking polyndrom', ()=> {
const test_data = ['abba','madam','kazak','1221','ehe']
   it('checking for polyndrom', ()=> {
    for (let i = 0; i < test_data.length; i++){
    expect(polyndrom(test_data[i])).to.be.equal(test_data[i]);}
  })
})