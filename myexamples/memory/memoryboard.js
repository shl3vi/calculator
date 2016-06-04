var n1;
var n2;
var mArr = [];
var IsFirstClick = true;
var firstElement;
var secondElement;

var getBoardSizeValues = function(){
	n1 = $('#rows').val();
	n2 = $('#columns').val();
	createNumbers();
	createBoard();
}
// var onCardClick = function(){
	
// 	if (IsFirstClick){
// 		firstElement = $(this);
// 		var firstCardVal = firstElement.attr('cardNum');
// 		firstElement.html(firstCardVal);
// 		IsFirstClick = false;
// 	}

// 	else{
// 		secondElement = $(this);
// 		var secondCardVal = secondElement.attr("cardNum");
// 		secondElement.html(secondCardVal);
// 		if(firstElement.attr('cardNum') != secondElement.attr('cardNum'))
// 			setTimeout(function(){ notEqual();},3000);
			
// 		IsFirstClick = true; 
// 	}
// }

var notEqual = function(){
	firstElement.html("X");
	secondElement.html("X");
}


var createNumbers = function () {
	var maxNum = (n1*n2)/2;
	var minNum = 0;
	for (var i = 0; i < maxNum; i++){
		mArr [i*2] = mArr[(i*2)+1] = i+1;
	}
	shuffle(minNum,maxNum*2);
}

var createBoard = function(){
	var str = "";
	var len = mArr.len;
	for (var i = 0; i < mArr.length; i++) {
		str += "<div style='float:left;width:60px'><button class='card' cardNum='" 
		+ mArr[i] + "' style='float:left;width:60px'>X"
		str += "</button></div>";
		if ((i+1) % n2 == 0)
			str += "<br><br>";
	};
	$("body").append(str);
}

var shuffle = function (minNum,maxNum){
	var i = 0;
	while (i < maxNum*2)
	{
		var randNum1 = getRandomInt(minNum,maxNum);
		var randNum2 = getRandomInt(minNum,maxNum);
		swap (randNum1,randNum2);
		i++;
	}
}

var getRandomInt = function(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

var swap = function (num1,num2){
	var tmp = mArr [num1];
	mArr[num1] = mArr[num2];
	mArr[num2] = tmp;
}

$("#submit").click(function(){
	getBoardSizeValues();
	$(".values").hide();
	var cardsElement = document.getElementsByClassName("card");
	console.log(cardsElement[0]);
	for(var i = 0 ; i < cardsElement.length; i++){
		cardsElement[i].onclick = onCardClick;
	}
	// $('.card').click(onCardClick);
})


var onCardClick = function(e){
	if(IsFirstClick){
		firstElement = e.srcElement;
		firstCardVal = firstElement.getAttribute("cardNum");
		console.log(firstElement);

		firstElement.innerHTML = firstCardVal;
		IsFirstClick = false;
	}
	else
	{
		secondElement = e.srcElement;
		secondCardVal = secondElement.getAttribute("cardNum");
		secondElement.innerHTML = secondCardVal;
		IsFirstClick = true;
	}
}
