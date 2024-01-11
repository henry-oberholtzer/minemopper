import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Pressable, Text } from 'react-native';
import { useState } from 'react';
import { boardGraphics } from '../board-graphics';
import { Image } from 'react-native';
import newGame from '../game_logic/board-creator';

const Board = ({ route }) => {
	const { row, column, bombsNum } = route.params;
	const x = JSON.stringify(row);
	const y = JSON.stringify(column);
	const bombs = JSON.stringify(bombsNum);
	const game = newGame(x, y, bombs);
	const [board, setBoard] = useState<number[][]>([]);
	const [rendered, setRendered] = useState<number[][]>([]);
	const [mines, setMines] = useState<number>(0);

	useEffect(() => {
		const game = newGame(10, 20, 20);
		setRendered(game.overlay);
		setBoard(game.board);
		setMines(game.mines);
	}, []);

	const setNewRender = (originalBoard: number[][]) => {
		return (x: number, y: number, tile: number) => {
			const newRender = [...originalBoard];
			newRender[y][x] = tile;
			setRendered(newRender);
		};
	};
	const setDetonate = setNewRender(board);
	const setRevealOrFlag = setNewRender(rendered);

	const isRevealed = (x: number, y: number) =>
		board[y][x] === rendered[y][x] ? true : false;
	const isMine = (x: number, y: number) => (board[y][x] === 10 ? true : false);
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
	const isValidTile = (x: number, y: number) =>
		0 <= y && y <= board.length - 1 && x >= 0 && x <= board[0].length - 1
			? true
			: false;
	const getBoardTile = (x: number, y: number) => board[y][x];

	const floodReveal = (x: number, y: number) => {
		const tilesToReveal = getNeighboringTiles(x, y).filter((coord) => {
			const [xCoord, yCoord] = coord;
			if (isValidTile(xCoord, yCoord)) {
				console.log(coord);
				if (isMine(xCoord, yCoord) || isRevealed(xCoord, yCoord)) {
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

	const handleTilePress = (coords: number[], tile: number) => {
		const [x, y] = coords;
		if (rendered[y][x] === 12) {
		} else if (tile === 10) {
			// sets detonated
			setDetonate(x, y, 9);
			console.log('gameover function is triggered');
		} else if (tile === 0) {
			// reveals blank tile
			floodReveal(x, y);
			console.log('reveal function is triggered');
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
		} else if (rendered[y][x] === 11) {
			// sets flags
			setRevealOrFlag(x, y, 12);
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

	return <View style={styles.board}>{renderBoard(rendered)(board)}</View>;
};

const styles = StyleSheet.create({
	board: {
		flex: 8,
		width: '100%',
		height: '100%',
		border: '2px solid #807d84ff',
		backgroundColor: 'black',
	},
	row: {
		flexDirection: 'row',
	},
});

export default Board;
