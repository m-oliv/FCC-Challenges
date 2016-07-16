function reverseString(str) {
  var s = str.split("");
  var s1 = s.reverse();
  str = s1.join("");
  return str;
}

alert(reverseString("hello"));