const palyndrom = require('../src/isPalindrome_Func_Vik.js')
const expect = require ("chai").expect;
describe('Test suit for checking palindrome', ()=> {
const test_data = ['abba','madam','kazak','1221','ehe']
   it('checking for palindrome', ()=> {
    for (let i = 0; i < test_data.length; i++){
    expect(palindrome(test_data[i])).to.be.equal(test_data[i]);}
  })
})