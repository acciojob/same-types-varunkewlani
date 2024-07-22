function isSameType(value1, value2)
{
	if(Number.isNaN(value1) && Number.isNaN(value2))
		return true;
	else if(typeof(value1) === typeof(value2))
		return true;

	else{
		return false;
	}
}
let value1 = prompt()
let value2 = prompt()
if (!isNaN(value1)) {
    value1 = Number(value1);
}
if (!isNaN(value2)) {
    value2 = Number(value2);
}

alert(isSameType(value1, value2));
