import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Board from './Board';
import newGame from './game_logic/board-creator';

const game = newGame(8, 8, 8);

export default function App() {
	return (
		<View style={styles.container}>
			<View style={styles.boardContainer}>
				<Board game={game} />
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
