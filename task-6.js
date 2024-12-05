const randomNumber = Math.ceil(Math.random() * 100);

function guessNumber(number, min, max) {
	const assumption = Math.floor((min + max) / 2);
	console.log(`Компьютер 2: Пробую число ${assumption}.`);
	if (number === assumption) {
		console.log('Компьютер 1: Угадал!');
	} else if (number < assumption) {
		console.log('Компьютер 1: Меньше.');
		guessNumber(number, min, assumption);
	} else if (number > assumption) {
		console.log('Компьютер 1: Больше.');
		guessNumber(number, assumption, max);
	}
}

guessNumber(randomNumber, 1, 100);