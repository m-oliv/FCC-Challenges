
function rot13(str) { // LBH QVQ VG!
  
  var x;
  var s = [];
  for(var i = 0; i<str.length;i++){
  	x = str.charCodeAt(i);
  	
  	if(x < 65 || x > 90){
  		s.push(String.fromCharCode(x));
  	}else if(x < 78){
  		s.push(String.fromCharCode(x+13));
  	}else{
  		s.push(String.fromCharCode(x-13));
  	}
  	
  }
  return s.join('');
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
