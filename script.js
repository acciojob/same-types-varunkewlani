function isSameType(value1, value2) {
  //your js code here
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
function isSameType(value1, value2)
{
	if(isNaN(value1) && isNaN(value2))
		return true;
	else if(typeof value1 === typeof value2)
		return true;
	else{
		return false;
	}
}

alert(isSameType(value1, value2));
