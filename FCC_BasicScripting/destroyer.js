function destroyer(arr) {
  // Remove all the values
  var args = Array.prototype.slice.call(arguments);
  var a = args.slice(0,1);
  return arr.filter(function isArg(val){
  	return args.indexOf(val) === -1;
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
