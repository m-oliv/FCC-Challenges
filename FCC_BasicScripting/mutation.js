
function mutation(arr) {
  var count = 0;
  var a1 = arr[0].toLowerCase().split("");
  var a2 = arr[1].toLowerCase().split("");
  
  for(var i =0;i<a2.length;i++){
    if(a1.indexOf(a2[i]) > -1){
      count+=0;
    }
    else{
      count +=1;
    }
 }
  
  if(count ===0){
    return true;
  }
  else{
    return false;
  }
}

mutation(["Mary", "Army"]);