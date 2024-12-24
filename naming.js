function calculateTotalAmount(amounts) {
	let total = 0;
	amounts.forEach(amount => {
		total += amount;
	});
	return total;
}

let topСustomersSpending = [10000, 20000, 30000];
console.log(calculateTotalAmount(topСustomersSpending));