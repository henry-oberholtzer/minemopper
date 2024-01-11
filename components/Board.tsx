import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Pressable, Text } from 'react-native';
import { useState } from 'react';
import { boardGraphics } from '../board-graphics';
import { Image } from 'react-native';
import newGame from '../game_logic/board-creator';
import BoardHeader from './BoardHeader';

const Board = ({ route }) => {
	const [board, setBoard] = useState<number[][]>([]);
	const [rendered, setRendered] = useState<number[][]>([]);
	const [mines, setMines] = useState<number>(0);
	const [flags, setFlags] = useState<number>(0);
	const [smile, setSmile] = useState<boolean>(true);
	const [gameActive, setGameActive] = useState<boolean>(false);
	useEffect(() => {
		const { row, column, bombsNum } = route.params;
		const game = newGame(row, column, bombsNum);
		setRendered(game.overlay);
		setBoard(game.board);
		setMines(game.mines);
		setGameActive(true);
	}, []);

	useEffect(() => {
		if (board.length > 0) {
			zeroOpen(board);
		}
	}, [board]);

	const setNewRender = (originalBoard: number[][]) => {
		return (x: number, y: number, tile: number) => {
			const newRender = [...originalBoard];
			newRender[y][x] = tile;
			setRendered(newRender);
		};
	};
	const setRevealOrFlag = setNewRender(rendered);

	const revealGameOverBoard = (
		board: number[][],
		rendered: number[][],
		detonated: number[]
	) => {
		return board.map((row, y) => {
			return row.map((tile, x) => {
				if (x === detonated[0] && y === detonated[1]) {
					// if is the point of detonation
					return 9;
				} else if (tile === 10 && rendered[y][x] === 12) {
					// if is a correct flag
					return 12;
				} else if (tile !== 10 && rendered[y][x] === 12) {
					// if is not a correct flag
					return 13;
				} else {
					return tile;
				}
			});
		});
	};

	const isRevealed = (x: number, y: number) =>
		board[y][x] === rendered[y][x] ? true : false;
	const isMine = (x: number, y: number) => (board[y][x] === 10 ? true : false);
	const isFlagged = (x: number, y: number) =>
		rendered[y][x] === 12 ? true : false;
	const isValidTile = (x: number, y: number) =>
		0 <= y && y <= board.length - 1 && x >= 0 && x <= board[0].length - 1
			? true
			: false;

	const getNeighboringTiles = (x: number, y: number) => [
		[x, y],
		[x - 1, y - 1],
		[x + 1, y + 1],
		[x - 1, y + 1],
		[x + 1, y - 1],
		[x + 1, y],
		[x - 1, y],
		[x, y + 1],
		[x, y - 1],
	];
	const getBoardTile = (x: number, y: number) => board[y][x];

	const floodReveal = (x: number, y: number) => {
		const tilesToReveal = getNeighboringTiles(x, y).filter((coord) => {
			const [xCoord, yCoord] = coord;
			if (isValidTile(xCoord, yCoord)) {
				if (
					isMine(xCoord, yCoord) ||
					isFlagged(xCoord, yCoord) ||
					isRevealed(xCoord, yCoord)
				) {
					return;
				} else {
					const newRender = [...rendered];
					newRender[yCoord][xCoord] = getBoardTile(xCoord, yCoord);
					setRendered(newRender);
					return coord;
				}
			} else {
				return;
			}
		});

		if (tilesToReveal.length - 1 != 0) {
			tilesToReveal.forEach((coord) => {
				if (getBoardTile(coord[0], coord[1]) === 0) {
					floodReveal(coord[0], coord[1]);
				}
			});
		}
	};

	const zeroOpen = (currentBoard: number[][]) => {
		const getOpenOptions = (board: number[][]) => {
			const openOptions = [];
			for (let y = 0; y < board.length; y++) {
				for (let x = 0; x < board[y].length; x++) {
					if (board[y][x] === 0) {
						openOptions.push([x, y]);
					}
				}
			}
			return openOptions;
		};
		const sortByX = (array: number[][]) => {
			return array.sort((a, b) => {
				if (a[0] < b[0]) {
					return -1;
				} else if (b[0] < a[0]) {
					return 1;
				}
			});
		};
		const options = getOpenOptions(currentBoard);
		const sort = sortByX(options);
		const middle = sort[Math.round(sort.length / 2)];
		floodReveal(middle[0], middle[1]);
	};

	const handleTilePress = (coords: number[], tile: number) => {
		const [x, y] = coords;
		if (rendered[y][x] === 12) {
		} else if (tile === 10) {
			// sets detonated
			setRendered(revealGameOverBoard(board, rendered, [x, y]));
			setSmile(false);
			setGameActive(false);
			console.log('game over function');
		} else if (tile === 0) {
			// reveals blank tile
			floodReveal(x, y);
		} else {
			// reveals number tile
			setRevealOrFlag(x, y, tile);
		}
	};

	const handleLongPress = (coords: number[]) => {
		const [x, y] = coords;
		if (rendered[y][x] === 12) {
			// unsets flags
			setRevealOrFlag(x, y, 11);
			setFlags(flags - 1);
		} else if (rendered[y][x] === 11) {
			// sets flags
			setRevealOrFlag(x, y, 12);
			setFlags(flags + 1);
		}
	};

	const renderBoard = (render: number[][]) => {
		return (board: number[][]) => {
			return render.map((row: number[], y: number) => {
				return (
					<View
						key={y}
						style={styles.row}>
						{row.map((tile: number, x: number) => {
							return (
								<Pressable
									key={`${x},${y}`}
									delayLongPress={150}
									disabled={gameActive ? false : true}
									onPress={() => handleTilePress([x, y], board[y][x])}
									onLongPress={() => handleLongPress([x, y])}>
									<Image source={boardGraphics[tile]} />
								</Pressable>
							);
						})}
					</View>
				);
			});
		};
	};

	return (
		<>
			<View>
				<BoardHeader
					mineCount={mines - flags}
					timerStart={gameActive}
					smile={smile}
				/>
				{renderBoard(rendered)(board)}
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	board: {
		flex: 8,
		width: '100%',
		height: '100%',
		border: '2px solid #807d84ff',
	},
	tile: {
		width: 32,
		height: 32,
	},
	row: {
		flexDirection: 'row',
	},
});

export default Board;
