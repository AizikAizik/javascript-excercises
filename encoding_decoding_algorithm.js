var DICTIONARY =
"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("");

//converts a decoded num value to an encoded value
const encodeId = (num) =>{
  var base = DICTIONARY.length;
  var encoding = '';

// if the parameter value is zero
  if (num === 0) {
    return DICTIONARY[0];
  }

  while (num > 0) {
    encoding += DICTIONARY[(num % base)];
    num = Math.floor(num / base);
  }
  return reversedWord(encoding)
}


//reversing a string or num Value
const reversedWord = (str) =>{
  var reversed = ''

  for(i = str.length -1; i>= 0 ; i--){
    reversed += str.charAt(i);
  }
  return reversed;
}


//converts an encoded string into a decoded id number
const decodeId = (id) =>{
  var base = DICTIONARY.length;
  var decoded = 0;

  for (var i = 0; i < id.split('').length; i++) {
    decoded = decoded * base + DICTIONARY.indexOf(id.charAt(i));
  }
  return decoded;
}
