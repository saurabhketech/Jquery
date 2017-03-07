$(function(){
	var json = '{ "firstname":"saurabh", "lastname":"saurabh", "dob":"18-09-1996" }';
	var obj = JSON.parse(json);
	var details= "first name="+ obj.firstname +"&emsp;"+ "Last name=" + obj.lastname +"&emsp;"+"date of birth="+ obj.dob;
	$(".object").html(details);
});