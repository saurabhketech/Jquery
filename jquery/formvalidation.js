$("document").ready(function(){
	$("#submit").click(function(){
		var fname=$("#name").val();
		var femail=$("#email").val();
		var fpassword=$("#password").val();
		var lenpassword=$("#password").val().length;
		var fcpassword=$("#cpassword").val();
		
		
		if(fname=="")
		{
			alert ("name cannot be empty");
			return false;
		}
		if(femail=="")
		{
			alert("email cannot be blank");
			return false;
		}
		var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
		if(!(pattern.test($('#email').val())))
		{
			alert("wrong email");
			return false;
		}
		if(lenpassword<=5)
		{
			alert("password is more then 5 characters");
			return false;
		}
		if (fpassword!=fcpassword) 
		{
			alert("password not matched");
			return false;
		};
		if ($('#checkbox').prop("checked"))
		{
			alert("sucess");
		}
		else
		{
			alert("Agree terms and conditions");
			return false;
		}

	});
});