const randomInt = (max) => Math.floor(Math.random() * max);

const newBoardWithMines = (numberOfMines, boardSize) => {
	let placedTiles = [];
	let boardFlat = new Array(boardSize).fill(0);
	for (let i = numberOfMines; i > 0; ) {
		const tileToPlace = randomInt(boardSize);
		if (placedTiles.includes(tileToPlace)) {
		} else {
			boardFlat[tileToPlace] = 10;
			placedTiles.push(tileToPlace);
			i--;
		}
	}
	return boardFlat;
};

const makeBoardGrid = (boardFlat, xLength) => {
	const boardGrid = [];
	while (boardFlat.length) boardGrid.push(boardFlat.splice(0, xLength));
	return boardGrid;
};

const calculateProximity = (board) => {
	const proximityBoard = board.map((row, y) => {
		return row.map((square, x) => {
			if (square === 10) {
				return square;
			} else {
				let proximityCount = 0;

				if (board[y - 1]) {
					if (board[y - 1][x - 1] === 10) {
						proximityCount++;
					}
					if (board[y - 1][x] === 10) {
						proximityCount++;
					}
					if (board[y - 1][x + 1] === 10) {
						proximityCount++;
					}
				}
				if (board[y][x - 1] === 10) {
					proximityCount++;
				}
				if (board[y][x + 1] === 10) {
					proximityCount++;
				}
				if (board[y + 1]) {
					if (board[y + 1][x - 1] === 10) {
						proximityCount++;
					}
					if (board[y + 1][x] === 10) {
						proximityCount++;
					}
					if (board[y + 1][x + 1] === 10) {
						proximityCount++;
					}
				}
				return proximityCount;
			}
		});
	});
	return proximityBoard;
};

const boardGenerator = (xLength, yLength, numberOfMines) => {
	return calculateProximity(
		makeBoardGrid(newBoardWithMines(numberOfMines, xLength * yLength), xLength)
	);
};

export default boardGenerator;
