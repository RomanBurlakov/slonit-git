function mySlice(arr, start = 0, end = arr.length) {
	const newArray = [];
	if (end < 0) end = arr.length + end;
	if (start < 0) start = arr.length + start;
	for (let i = start; i < end; i++) {
		newArray.push(arr[i]);
	}
	return newArray;
}

function myIndexOf(arr, item, from = 0) {
	if (from < 0) from = arr.length + from;
	for (let i = from; i < arr.length; i++) {
		if (arr[i] === item) return i;
	}
	return -1;
}

function myIncludes(arr, item, from = 0) {
	if (from < 0) from = arr.length + from;
	for (let i = from; i < arr.length; i++) {
		if (arr[i] === item) return true;
	}
	return false;
}