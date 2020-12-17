const abcRange = 26;
const aAsciiValue = 65;
const zAscciValue = 90;
let asciiValue = [];
let scrollSteps = 0;
let asciiValueCode = [];
let newLetter = [];
let newPassword = 0;
  
const cipher = {
    encode: function(sentence, numberOffset) {
      cipher.asciiConvert(sentence);
      cipher.countSteps(numberOffset);
      cipher.stepsScroll(asciiValue, scrollSteps);
      cipher.asciiToLetter(asciiValueCode);
      return newPassword;
    },

    decode: function(sentence, numberOffset) {
      cipher.asciiConvert(sentence);
      cipher.countSteps(numberOffset);
      cipher.stepsScroll2(asciiValue, scrollSteps);
      cipher.asciiToLetter(asciiValueCode);
      return newPassword;
    },

    asciiConvert: function(sentence) {
     if(sentence == "") {
        throw new TypeError('No se ha introducido un enunciado');
      }
      for (let i = 0; i < sentence.length; i++){asciiValue[i] =  sentence[i].charCodeAt(0);
      }
     // console.log(asciiValue);
      return asciiValue;
    },

    countSteps: function(numberOffset) {
      switch(true){
          case (numberOffset == abcRange || numberOffset == 0):
            throw new TypeError('Número no válido');
          case (numberOffset > abcRange):
            scrollSteps = numberOffset % abcRange;
           // console.log('Número grande ' + 'Avanza ' + scrollSteps);
            break;
          case (numberOffset < abcRange):
            scrollSteps = numberOffset;
            //console.log('Número pequeño ' + 'Avanza ' + scrollSteps);
            break;
          }
          //console.log(scrollSteps);
          return scrollSteps;
    },

    stepsScroll: function(ascii, steps) {
      for (let i = 0; i < ascii.length; i++){
        let sum = ascii[i] + steps;
        if  (sum > zAscciValue) {
          asciiValueCode[i] = 64 + (sum - zAscciValue);
          }
        else {
          asciiValueCode[i] = ascii[i] + steps;
          }
        }
        //console.log(asciiValueCode);
        return asciiValueCode;
    },

    stepsScroll2: function (ascii, steps) {
      for (let i = 0; i < ascii.length; i++){
        let sum = ascii[i] - steps;
        if  (sum < aAsciiValue) {
              asciiValueCode[i] = 91 - (aAsciiValue - (ascii[i] - steps));
          }
        else {
          asciiValueCode[i] = ascii[i] - steps;
          }
        }
      //console.log(asciiValueCode);
      return asciiValueCode;
    },

    asciiToLetter: function (asciiNew) {
      for (let i = 0; i < asciiNew.length; i++){
            newLetter[i]= String.fromCharCode(asciiNew[i]);
        }
      newPassword = newLetter.join("");
      //console.log(newPassword);
      return newPassword;
    },
  };

export default cipher;


