function capitalizeFirstLetter(string) {
	return string[0].toUpperCase() + string.slice(1);
}

function cutString(string, cap) {
	if (string.length <= cap) string;
	while (!string[cap].match(/[\s,\.!?:;]/)) cap--;
	return string.slice(0, cap) + '...';
}

function substrings(str1, str2) {
	return str1.includes(str2) || str2.includes(str1);
}