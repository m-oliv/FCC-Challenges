
function truncateString(str, num) {
  // Clear out that junk in your trunk
  var newStr = "";
  if(str.length > num && num>3){
    // trunc
    newStr = str.slice(0, num-3);
    return newStr + "...";
  }
  if(str.length > num && num<=3){
    newStr = str.slice(0, num);
    return newStr+"...";
  }
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);