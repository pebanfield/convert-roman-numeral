/**
 * roman-numerals-spec
 *
 * Out of scope : Numbers greater than 1000 not supported - this would require some addition characters and multiplication
 */
var assert = require('assert');

var RomanNumerals = require('../src/roman-numerals.js');


describe('roman-numerals-spec', function () {

  var rm;
  beforeEach(function() {
    rm = new RomanNumerals();
  });

  describe('Roman numerals should be converted ', function () {

    it('when formed of single characters', function () {

      var num = rm.convertToArabic('X');
      assert.equal(num, 10);
    });

    it('when formed of two characters', function(){

      var num = rm.convertToArabic('XV');
      assert.equal(num, 15);
    });

    it('when formed of three characters', function(){

      var num = rm.convertToArabic('CLV');
      assert.equal(num, 155);
    });

    it('when contains subtraction', function(){

      var num = rm.convertToArabic("IV");
      assert.equal(num, 4);
    });

    it('when contains subtraction in middle', function(){

      var num = rm.convertToArabic("LIV");
      assert.equal(num, 54);
    });

    it('when contains a double subtraction', function(){

      var num = rm.convertToArabic("MCMIX");
      assert.equal(num, 1909);
    });

    it('when ends with 2 ones', function(){

      var num = rm.convertToArabic("CLVII");
      assert.equal(num, 157);
    });

    it('when ends with 3 ones', function(){

      var num = rm.convertToArabic("CLVIII");
      assert.equal(num, 158);
    });

    it('when number is from assignement', function(){

      var num = rm.convertToArabic("MCMLXIX");
      assert.equal(num, 1969);
    });

  });

  describe('Conversion validation should throw an error when ', function(){

    it('contains more than 3 in a row of same character', function(){

      assert.throws(function(){
        var num = rm.convertToArabic("IIII");
      }, Error, "Conversion Validation Error");
    });

    it('contains more than 3 in a row of same character', function(){

      assert.throws(function(){
        var num = rm.convertToArabic("XXXX");
      }, Error, "Conversion Validation Error");
    });

    it('contains more than 3 in a row of same character at end', function(){

      assert.throws(function(){
        var num = rm.convertToArabic("CVIIII");
      }, Error, "Conversion Validation Error");
    });

    it('begins with smaller number character', function(){

      assert.throws(function(){
        var num = rm.convertToArabic("LCX");
      }, Error, "Conversion Validation Error");
    });

    it('begins with smaller number character V not divisible by 10', function(){

      assert.throws(function(){
        var num = rm.convertToArabic("VXI");
      }, Error, "Conversion Validation Error");
    });

    it('begins with smaller number character L not divisible by 10', function(){

      assert.throws(function(){
        var num = rm.convertToArabic("LCX");
      }, Error, "Conversion Validation Error");
    });

    it('contains an empty string', function(){

      assert.throws(function(){
        var num = rm.convertToArabic("");
      }, Error, "Conversion Validation Error");
    });

  })
});
