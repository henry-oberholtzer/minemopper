import { StyleSheet, View } from 'react-native';
import BoardTile from './Board-Tile';
import { boardGraphics } from './board-graphics';

const setAllToType = (board) => {
	return (originLocation) => {
		const [x, y] = originLocation;
		const type = board[y - 1][x - 1];
		document.getElementById([x - 1, y - 1]).querySelector('img').src =
			boardGraphics[type];
	};
};

const Board = ({ game }) => {
	const { board } = game;
	const detonationFunction = setAllToType(board);
	return (
		<View style={styles.board}>
			{board.map((row, y) => {
				return (
					<View
						id={y}
						key={y}
						style={styles.row}>
						{row.map((tile, x) => {
							return (
								<BoardTile
									detonationFunction={detonationFunction}
									type={tile}
									location={[x, y]}
									key={x}
								/>
							);
						})}
					</View>
				);
			})}
		</View>
	);
};

const styles = StyleSheet.create({
	board: {
		flex: 8,
		width: 256,
		height: 256,
		border: '2px solid #807d84ff',
		backgroundColor: 'black',
	},
	row: {
		flexDirection: 'row',
	},
});

export default Board;
