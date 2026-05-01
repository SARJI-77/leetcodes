/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let og=x;
     let dup=x.toString().split('').reverse().join('')
     return com= og == dup
};