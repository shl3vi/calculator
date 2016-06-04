$(document).ready(function(){
	// var length = document.getElementsByTagName("P").length;
	// console.log(length);

});

var repeatPargraphs = function (){
	var pArray = document.getElementsByTagName("P");
	var pHash = {};
	for(var i =0; i< pArray.length; i++){
		var currentElement = pArray[i]; //pure js 
		var text1 = currentElement.textContent;
		if(pHash[text1])
		{
			var parent = currentElement.parentElement; 
			parent.removeChild(currentElement);	
			i--;
		}
		else
		{
			pHash[text1] = true;
		}
	}
}

repeatPargraphs();