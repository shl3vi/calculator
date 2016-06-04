$("#inqueue").click(function(){
	name = $("#inqueueName").val();
	input = $(".inqueueInput").val();
	var data = {name : name , input : input};
	$.ajax("/queue/inqueue",{
		method : "POST",
		data : data,
			success: function(data){
				alert (data);
			},
			error: function(data){
				alert (data);
			}
	});
});

$("#dequeue").click(function(){
	name = $("#dequeueName").val();
	var data = {name : name};
	$.ajax("/queue/dequeue",{
		method : "POST",
		data : data,
			success: function(data){
			alert (data);
		},
			error : function(data){
			alert(data);
		}
	});
});

$("#snapShot").click(function(){
	$.ajax("/queue/snapshot",{
		method : "POST",
		success : function(data){
			console.log(data);
		},
		error : function(data){
			alert(data);
		}
	});
});