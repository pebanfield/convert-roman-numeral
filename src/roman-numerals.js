/**
 * roman-numerals
 *
 * Out of scope : Numbers greater than 1000 not supported - this would require some addition characters and multiplication
 *
 */

module.exports = RomanNumerals;

function RomanNumerals(){

  this.symbols =
  {'i': 1,
    'v': 5,
    'x': 10,
    'l': 50,
    'c': 100,
    'd': 500,
    'm':1000};

  this.subtractions =
  {
    'iv': 4,
    'ix': 9,
    'xl': 40,
    'xc': 90,
    'cd': 400,
    'cm': 900
  };

  this.MAX_REPEAT = 3;
  this.convertToArabic = convertToArabic;

  function convertToArabic(numeralStr){

    if(!/^[A-z]+$/.test(numeralStr)){ // accept only valid characters
      throwValError();
    }

    numeralStr = numeralStr.toLowerCase();

    var strLength = numeralStr.length;
    var arabicNum = 0;
    var charCount = 1;

    for(var i=0; i<strLength; i++){

      var currentChar = numeralStr.charAt(i);
      var nextChar = numeralStr.charAt(i+1);

      if(this.symbols[currentChar] < this.symbols[nextChar]) {

        if(this.subtractions[currentChar+nextChar]){
          arabicNum += this.symbols[nextChar]-this.symbols[currentChar];
          i++; //skip ahead for double char subtraction symbol
        } else {
          throwValError();
        }
      } else {
        if(charCount > this.MAX_REPEAT){
          throwValError();
        }
        if(currentChar === nextChar){
          charCount++;
        } else {
          charCount = 1;
        }
        arabicNum += this.symbols[currentChar];
      }
    }
    return arabicNum;
  }

  function throwValError(){
    throw new Error("Conversion Validation Error");
  }

}
