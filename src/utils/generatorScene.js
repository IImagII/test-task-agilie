export function generateScene(numActors, numObstacles, numRows, numCols) {
	const scene = [];
	for (let i = 0; i < numRows; i++) {
		scene.push([]);
		for (let j = 0; j < numCols; j++) {
			scene[i].push("");
		}
	}

	// добавляем актеров
	for (let i = 0; i < numActors; i++) {
		let row, col;
		do {
			row = Math.floor(Math.random() * numRows);
			col = Math.floor(Math.random() * numCols);
		} while (scene[row][col] !== "");

		scene[row][col] = "A";
	}

	// добавляем препятствия
	for (let i = 0; i < numObstacles; i++) {
		let row, col;
		do {
			row = Math.floor(Math.random() * numRows);
			col = Math.floor(Math.random() * numCols);
		} while (scene[row][col] !== "");

		scene[row][col] = "X";
	}

	return scene;
}