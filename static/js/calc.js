var firstNum = "";
var secondNum = "";
var operator = "";

var isFirstNum = function(){
	if ("" == operator)
		return true;
	return false;	
}

$( ".numbers" ).click(function() {
  var isFirst = isFirstNum();
  if (isFirst)
  	firstNum = firstNum + $(this).html();
  else
  	secondNum = secondNum + $(this).html();

  console.log(firstNum + " " + operator + " " + secondNum);
  $("#input").val(firstNum + " " + operator + " " + secondNum);
});

$( ".operators" ).click(function() {
  if (("" != firstNum) && ("" == secondNum))
  	operator = $(this).html();

  console.log(firstNum + " " + operator + " " + secondNum);
  $("#input").val(firstNum + " " + operator + " " + secondNum);
});

$( "#clear" ).click(function() {
	firstNum = "";
 	secondNum = "";
	operator = "";
  	$("#input").val(firstNum + " " + operator + " " + secondNum);
});

$( "#equal" ).click(function() {
	var theData = {first: firstNum, second: secondNum, operator: operator};
	$.ajax("/calculate", {
		method: "post",
	  data: theData,
      success: function(data) {
      	console.log("hi");
      	console.log(data.result);
         $('#input').html(data.result);
      },
      error: function() {
         alert("something is wrong!");
      }
   });
});
