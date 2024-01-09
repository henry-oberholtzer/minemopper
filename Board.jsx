import { StyleSheet, View } from 'react-native';
import BoardTile from './Board-Tile';

const Board = ({ boardArray }) => {
	return (
		<View style={styles.board}>
			{boardArray.map((row) => {
				return Row(row);
			})}
		</View>
	);
};

const Row = (row) => {
	return (
		<View style={styles.row}>
			{row.map((tile) => {
				return (
					<BoardTile
						type={tile}
						key={tile}
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
