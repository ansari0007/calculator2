//java script for simple calculator 2
function add(){
	var x=document.getElementById("input_1").value;
	var y=document.getElementById("input_2").value;
	var z=+x + +y;
	
	alert(z);
}
	


function sub(){
	var x=document.getElementById("input_1").value;
	var y=document.getElementById("input_2").value;
	var z= x - y;
	
	alert(z);
}
function mul(){
	var x=document.getElementById("input_1").value;
	var y=document.getElementById("input_2").value;
	var z=x*y;
	alert(z);
}
function div(){
	var x=document.getElementById("input_1").value;
	var y=document.getElementById("input_2").value;
	var z=x/y;
	alert(z);
}