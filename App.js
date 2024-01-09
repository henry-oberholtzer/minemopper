import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Board from './Board';
import boardGenerator from './game_logic/board-creator';

const board = boardGenerator(8, 8, 24);
console.log(board);
export default function App() {
	return (
		<View style={styles.container}>
			<View style={styles.boardContainer}>
				<Board boardArray={board} />
			</View>
			<Text>Open up App.js to start working on your app!</Text>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
