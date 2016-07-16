function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  
  var s = str.substr(str.length - target.length, str.length);

  return s === target;
}


confirmEnding("Connor", "n");