function convertToRoman(num){
	var decimal = [1,4,5,9,10,40,50,90,100,400,500,900,1000].reverse();
	var roman = ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"].reverse();
	var conv = "";
	
	for(var i = 0; i<decimal.length; i++){
		while(decimal[i] <= num){
			conv +=roman[i];
			num -= decimal[i];
		}
	}
	
	return conv;
}

convertToRoman(1000);