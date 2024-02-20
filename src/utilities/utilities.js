export const dataInit = (size) => {
	let result = [];
	for (let i = 0; i < size; i++) {
		result.push([]);
		for (let j = 0; j < size; j++) {
			result[i].push({
				value: false,
				key: String(i) + String(j),
				crossIndex: Math.floor(Math.random() * 4),
				circleIndex: Math.floor(Math.random() * 4),
				cellIndex: Math.floor(Math.random() * 3),
			});
		}
	}
	return result;
};

export const checkWin = (cellX, cellY, tableData, shape, winCon) => {
	if (tableData[cellX][cellY].value === false)
		tableData[cellX][cellY].value = shape;
	let result = null;
	result = result || checkLine(cellX, cellY, 1, 0); //horizontal
	result = result || checkLine(cellX, cellY, 0, 1); //vertical
	result = result || checkLine(cellX, cellY, 1, 1); //diagonal 45
	result = result || checkLine(cellX, cellY, 1, -1); //diagonal 135

	return result;

	function getShape(x, y) {
		return tableData[x] && tableData[x][y] ? tableData[x][y].value : false;
	}

	function checkLine(x, y, dx, dy) {
		x = +x;
		y = +y;
		let score = 0;
		while (getShape(x - dx, y - dy) === shape) {
			x -= dx;
			y -= dy;
		}
		while (getShape(x, y) === shape) {
			x += dx;
			y += dy;
			score++;
		}
		if (score >= winCon) return true;
		return false;
	}
};
