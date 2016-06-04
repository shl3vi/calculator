var name = "";
var title = "";
var num = "";
var isAddVisible;
var isSearchVisible;

$("document").ready(function(){
  $("#addFields").hide();
    $("#searchFields").hide();
    var isAddVisible = false;
    var isSearchVisible = false;
});

$("#add").click(function(){
  if(!isAddVisible){
    $("#addFields").show();
    isAddVisible = true;
    cleanInput();
  }
  else{
    $("#addFields").hide();
    isAddVisible = false;
  }
});

$("#search").click(function(){
   if(!isSearchVisible){
    $("#searchFields").show();
    isSearchVisible = true;
  }
  else{
    $("#searchFields").hide();
    isSearchVisible = false;
  }
});

$("#submit1").click(function(){
name = $("#name").val();
title = $("#title").val();
num = $("#num").val();
var data = { name:name, title:title, num:num};
console.log(data);

$.ajax("/library/addBook", {
    method: "POST",
    data: data,
      success: function(data){
        console.log(data);
        $(".msg").text("book was added").fadeIn(5000).fadeOut(5000);
      },
      error: function(){
      alert("add book was faild");
      }
  });
});

$("#submit2").click(function(){
 name  = $("#searchName").val();
 var data = {name:name};
 $.ajax("/library/searchBook",{
  method : "POST",
  data : data,
    success: function (data){
        $(".msg2").text(JSON.stringify(data)).fadeIn(5000).fadeOut(5000);
  },
    error:function(){
    alert("search book was faild");
    }
 });
});

$("#clear").click(function(){
cleanInput();
});

var cleanInput = function(){
  name = "";
  title = "";
  num = "";
  $("#name").val(name);
  $("#title").val(title);
  $("#num").val(num);
}