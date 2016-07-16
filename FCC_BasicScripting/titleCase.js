
function titleCase(str) {
  var s1 = str.toLowerCase();
  var s = s1.split(" ");
  
  for(var i = 0; i<s.length;i++){
    s[i]=s[i].charAt(0).toUpperCase() + s[i].substr(1).toLowerCase();
  }
  
  var s2 = s.join(" ");
  
  return s2;
}

alert(titleCase("sHoRt AnD sToUt"));
