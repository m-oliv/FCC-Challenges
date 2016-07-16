function sumAll(arr) {
	var a1 = [];
	var min = Math.min(...arr);
	var max = Math.max(...arr);
	
	for(var i = min; i<max;i++){
		a1.push(i);
	}
	a1.push(max);
	
	return a1.reduce(function(prev,current,index,array){
		return prev + current;
	});
}

//sumAll([1, 4]);
//sumAll([4, 1]);
//sumAll([5, 10]);
sumAll([10, 5]);