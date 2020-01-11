//JavaScript source code

let msg="This is a JavaScript calculator.";
alert(msg);//before the page loads an alert is given saying "This is a JavaScript Calculator."

/**
This function gets the value of the button pressed for the first set of numbers.
@param val is the value that the button represents when pressed
*/
function input1(val)//function adds the values together into the text field
{
	document.getElementById("number1_input").value += val;// this adds the value of the button to the first text field
}

/**
This function gets the value of the button pressed for the second set of numbers.
@param val is the value that the button represents when pressed
*/
function input2(val2)//function adds the values together into the text fieldd
{
	document.getElementById("number2_input").value += val2;// this adds the value of the button to the second text field
}

/**
This function takes the two values in the texts field and either adds, subtracts, 
multipies, or divides them according to which button is checked when the "Compute" button is pressed.
*/
function compute()//computes the two numbers
{
	let num1 = Number(document.getElementById("number1_input").value);//get the value in the first text field
	let num2 = Number(document.getElementById("number2_input").value);//gets the value in the second text field

	if(document.getElementById("plus").checked === true)//if the plus sign is checked
	{
		let result1 = num1+num2;//adds the two numbers
		document.getElementById("result").innerHTML = "Result is: " + result1;//prints the results in the page
	}
	else if(document.getElementById("minus").checked === true)//if the minus sign is checked
	{
		let result2 = num1-num2;//subtracts the two numbers
		document.getElementById("result").innerHTML = "Result is: " + result2;//prints the results in the page
	}
	else if(document.getElementById("times").checked === true)//if the multiplication sign is checked
	{
		let result3 = num1*num2;//multiplies the two numbers
		document.getElementById("result").innerHTML = "Result is: " + result3;//prints the results in the page
	}
	else//if the division sign is selected
	{
		let result4 = num1/num2;//divides the two numbers
		document.getElementById("result").innerHTML = "Result is: " + result4;//prints the results in the page
	}
}

