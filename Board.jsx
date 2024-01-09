import { StyleSheet, View } from 'react-native';
import BoardTile from './Board-Tile';

const Board = ({ game }) => {
	const { board } = game;
	return (
		<View style={styles.board}>
			{board.map((row, i) => {
				return Row(row, i);
			})}
		</View>
	);
};

const Row = (row, i) => {
	return (
		<View
			key={i}
			style={styles.row}>
			{row.map((tile, a) => {
				return (
					<BoardTile
						type={tile}
						key={[a, i]}
					/>
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
		backgroundColor: 'black',
	},
	row: {
		flexDirection: 'row',
	},
});

export default Board;
