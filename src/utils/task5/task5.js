export const countGoodPositions = (scene) => {
	const n = scene.length;
	const m = scene[0].length;
	let count = 0;

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < m; j++) {
			if (scene[i][j] === "A") continue; // якщо в осередку вже є актор, переходимо до наступного осередку

			let hasActorInUp = false;
			let hasActorInDown = false;
			let hasActorInLeft = false;
			let hasActorInRight = false;

			// перевіряємо, чи є актори у напрямку світла ліхтаря
			for (let k = i - 1; k >= 0; k--) {
				// вгору
				if (scene[k][j] === "A") {
					hasActorInUp = true;
					break;
				}
			}
			for (let k = i + 1; k < n; k++) {
				// вниз
				if (scene[k][j] === "A") {
					hasActorInDown = true;
					break;
				}
			}
			for (let k = j - 1; k >= 0; k--) {
				// вліво
				if (scene[i][k] === "A") {
					hasActorInLeft = true;
					break;
				}
			}
			for (let k = j + 1; k < m; k++) {
				// вправо
				if (scene[i][k] === "A") {
					hasActorInRight = true;
					break;
				}
			}

			// якщо у напрямку світла ліхтаря є актори, а в осередку їх немає, то це 'хороша'
			if (hasActorInUp || hasActorInDown || hasActorInLeft || hasActorInRight) {
				count++;
			}
		}
	}

	return count
}