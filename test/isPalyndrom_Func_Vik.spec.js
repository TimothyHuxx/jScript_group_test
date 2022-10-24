const palyndrom = require('../src/isPalyndrom_Func_Vik.js')
const expect = require ("chai").expect;
describe('Test suit for checking palyndrom', ()=> {
const test_data = ['abba','madam','kazak','1221','ehe']
   it('checking for palyndrom', ()=> {
    for (let i = 0; i < test_data.length; i++){
    expect(palyndrom(test_data[i])).to.be.equal(test_data[i]);}
  })
})