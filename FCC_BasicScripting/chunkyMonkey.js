
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var newArr = [];
  for(var i = 0;i<arr.length;i+=size){
    var arrSl = arr.slice(i,i+size);
    newArr.push(arrSl);
  }
  
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);