var repeatPargraph = function(){
	var pHash = {};
	var pArray = document.getElementsByTagName("P");
	console.log(pArray[0].textContent);
	for (var i = 0; i < pArray.length; i++) {
		console.log("i: " + i + "pArray: " + pArray.length)
		var currentElement = pArray[i];
		var text = currentElement.textContent;
		if (pHash[text]){
			var parent = pArray[i].parentElement;
			parent.removeChild(currentElement);
			i--;
		}
		else
			pHash[text] = true; 
	}
}

repeatPargraph();