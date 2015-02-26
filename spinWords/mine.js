function spinWords(str) {
  return str.split(' ').map(function(word) {
    return word.length > 4 ? word.reverse() : word;
  }).join(' ');
}

String.prototype.reverse = function() {
  return this.split('').reverse().join('');
};