export const countGoodPositions = (scene) => {
	const n = scene.length;
	const m = scene[0].length;
	let count = 0;

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < m; j++) {
			if (scene[i][j] === "A") continue; // если в ячейке уже есть актер, переходим к следующей ячейке

			let hasActorInUp = false;
			let hasActorInDown = false;
			let hasActorInLeft = false;
			let hasActorInRight = false;

			// проверяем, есть ли актеры в направлении света фонаря
			for (let k = i - 1; k >= 0; k--) {
				// вверх
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
				// влево
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

			// если в направлении света фонаря есть актеры, а в ячейке их нет, то это "хорошая позиция"
			if (hasActorInUp || hasActorInDown || hasActorInLeft || hasActorInRight) {
				count++;
			}
		}
	}

	return count
}