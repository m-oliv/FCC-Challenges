function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  var a1 = arr.sort(function (a,b){
    return a-b;
  });
  
  var j;
  
  
  for(var i =0; i<arr.length; i++){
  	if(num <= a1[i]){
  		return i;
  	}
  }
  
  return a1.length;
}

getIndexToIns([40, 60], 50);