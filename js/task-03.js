'use strict';

const findLongestWord = function(string) {
    let stringSplit = string.split(' ');
    let longestWord = 0;
    let word;
    for(let i = 0; i < stringSplit.length - 1; i++){
      if(stringSplit[i].length > longestWord){
      longestWord = stringSplit[i].length;
      word = stringSplit[i];
       }
    }
    return word;
};
    

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); 

console.log(findLongestWord('Google do a roll')); 

console.log(findLongestWord('May the force be with you')); 