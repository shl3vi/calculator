var fs= require('fs');
      
function readTxtFromFile(err,data){
if (err)
	console.log(err);
else{
	var lines = data.split('\n');
	var length = lines.length;
	for (var i = 0; i < length; i++) 
		countABletters(lines[i],countCharAppearnce);
	}
}

function countABletters(line,callback)
{
	var sumA = 0;
	var sumB = 0; 

	sumA = callback(line,'a');
	sumB = callback (line,'b');

	if (sumA > sumB)
		console.log("A appears " + sumA +  " times, and B appears " + sumB + " times");
	else
		console.log("B appears " + sumB +  " times, and A appears " + sumA + " times");
}

function countCharAppearnce(line, char){
var sum = 0;
	for (var i = 0; i < line.length; i++) {
		if(line[i]==char)
			sum++
	}
	return sum;
}

fs.readFile("text.txt",'utf8',readTxtFromFile);
