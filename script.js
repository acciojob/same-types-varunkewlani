function isSameType(value1, value2)
{
	if(Number.isNaN(value1) && Number.isNaN(value2))
		return true;
	else if(typeof(value1) == typeof(value2))
		return true;
		
	else{
		return false;
	}
}
let value1 = prompt();
let value2 = prompt();

alert(isSameType(value1, value2))
