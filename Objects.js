function sumAllNumberFields(object) {
	return Object.values(object).reduce((acc, e) => {
		return typeof e === 'number' ? acc + e : acc;
	}, 0);
}

function getSortedFields(object) {
	return Object.keys(object).filter(e => typeof object[e] === 'number').sort((a, b) => object[b] - object[a]);
}