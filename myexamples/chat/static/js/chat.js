var isChat1;
var isChat2;

$("document").ready(function(){
	$(".chat1").hide();
  	isChat1 = false;
  	$(".chat2").hide();
  	isChat2 = false;
});

$("#chat1").click(function(){
	if(!isChat1){
	 $(".chat1").show();
	 isChat1 = true;
	}
	else{
	$(".chat1").hide();
	 isChat1 = false;
	}
});

$("#chat2").click(function(){
	if(!isChat2){
	 $(".chat2").show();
	 isChat2 = true;
	}
	else{
	$(".chat2").hide();
	 isChat2 = false;
	}
});


$("#send1").click(function(){
	var msg = $("#msg1").val();
	var data = {msg : msg, id: 1};
	socket.emit('chat1', data);
	$.ajax('/room/chathistory', {
		method : "POST",
		data : data.id,
			success : function(data){
				console.log(data);
			},
			error : function(data){
				console.log(data);
			}
		});
});

$("#send2").click(function(){
	var msg = $("#msg2").val();
	var data = {msg : msg, id: 2};
	socket.emit('chat2', data);
	$.ajax('/room/chathistory', {
		method : "POST",
		data : data.id,
			success : function(data){
				console.log(data);
			},
			error : function(data){
				console.log(data);
			}
		});
});


