const arrayindexoverflow = require('../index.js');

var charset = 'abcde'.split('');

var index = 10;

console.log(arrayindexoverflow(charset, index)); //Returs "a"