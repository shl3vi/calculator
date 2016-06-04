var firstNum = "";
var secondNum = "";
var operator = ""; 

var isFirstNum = function(){
	if (operator=="")
		return true;
	return false;
}

$( ".numbers" ).click(function() {
	if(isFirstNum())
		firstNum = firstNum+$(this).html();
  	else
  		secondNum = secondNum + $(this).html();

  		console.log(firstNum+ " "+operator+" "+secondNum); 
  		 $("#input").val(firstNum + " " + operator + " " + secondNum);
});
 	
$( ".operators" ).click(function() {
	operator = operator + $(this).html();
  	console.log(operator);
  	$("#input").val(firstNum + " " + operator + " " + secondNum);
});

$("#clear").click(function() {
firstNum = "";
secondNum = "";
operator = ""; 

$("#input").val(firstNum + " "+ secondNum + " " + operator);
});

$("#equal").click(function(){
	var theData= {first:firstNum,second:secondNum,operator:operator};
	$.ajax("/calculate", {
  	method: "POST",
  	data: theData,
  		success: function(data){
  			console(data.result);
  			$("#input").html(data.result);
  		},
  		error: function(){
  		alert("something is wrong");
  		}
	});
});