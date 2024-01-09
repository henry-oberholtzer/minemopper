import { StyleSheet, View } from 'react-native';
import BoardTile from './Board-Tile';
import { useState } from 'react';

const Board = ({ game }) => {
	const { board } = game;
	const [detonate, setDetonate] = useState(false);
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
									detonate={detonate}
									setDetonate={setDetonate}
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
