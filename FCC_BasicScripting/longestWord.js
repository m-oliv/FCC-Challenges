function findLongestWord(str) {
  var s = str.split(" ");
  var l = 0;
  for(var i = 0;i<s.length;i++){
    if(s[i].length>l){
      l = s[i].length;
    }
  }
  return l;
}

alert(findLongestWord("The quick brown fox jumped over the lazy dog"));
