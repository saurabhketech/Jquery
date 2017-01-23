$(function(){
	var i=0;
var employee={
	"user":[
		{
		"firstname":"saurabh","lastname":"kumar","dob":"18-09-1996"
		},

		{
		"firstname":"ram","lastname":"kumar","dob":"12-12-1995"
		},

		{
		"firstname":"shyam","lastname":"kumar","dob":"17-09-1989"
		},

		{
		"firstname":"geeta","lastname":"kumari","dob":"18-05-1999"
		}
]};
for(i=0;i<employee.user.length;i++){
	var value="<tr><td>"+employee.user[i].firstname+"</td><td>"+employee.user[i].lastname+"</td><td>"+employee.user[i].dob+"</td></tr>";
	$("#row").append(value);
}
});