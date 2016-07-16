
function palindrome(str) {
  var s = str.toLowerCase();
  var s0 = s.replace(/\s/g,'');
  var s1 = s0.replace(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/g,'');
  var s2 = s1.split("");
  var s3 = s2.reverse();
  var s4 = s3.join("");
  return s1===s4;
}



alert(palindrome("A man, a plan, a canal. Panama"));
