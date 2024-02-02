function reverseString(string) {
  let word = '';
  for(let i = string.length -1; i >= 0; i--){
  let char = string[i];
  word  += char;
  }
  return word;
}

module.exports = reverseString;




