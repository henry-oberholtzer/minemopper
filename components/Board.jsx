import { StyleSheet, View } from 'react-native';
import BoardTile from './BoardTile';
import { useState } from 'react';
import newGame from '../game_logic/board-creator';

const Board = ({ route }) => {

	const { row, column, bombsNum } = route.params

	const x = JSON.stringify(row);
	const y = JSON.stringify(column);
	const bombs = JSON.stringify(bombsNum)

	const game = newGame(x, y, bombs);
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
