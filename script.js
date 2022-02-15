// Main function which calculates the output based on user inputs
function compute() {
	var principal = document.getElementById("principal").value;
	var biggerThanZero = parseInt(principal) > 0;
    // Check whether 'Amount' input is zero or negative, in which case it resets inputs and brings focus back to 'Amount' field
	if (!biggerThanZero) {
		alert("Enter a positive number");
		document.getElementById("principal").focus();
		return;
	}
	var rate = document.getElementById("rate").value;
	var years = document.getElementById("years").value;
	var interest = principal * years * rate / 100;
	var year = new Date().getFullYear() + parseInt(years);
    //Results
	document.getElementById("result").innerHTML = "If you deposit <mark>£" + principal + "</mark>,\<br\>at an interest rate of <mark>" + rate + "%</mark>\<br\>You will receive an amount of <mark>£" + interest + "</mark>,\<br\>in the year <mark>" + year + "</mark>\<br\>";
	//Set focus back to 'Amount' field
    document.getElementById('principal').focus();
}

// Function to update the 'rate' label after the user releases the range slider
function updateRate() {
	var rateval = document.getElementById("rate").value;
	document.getElementById("rate_val").innerText = rateval;
}