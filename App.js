import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StartPopUp from './components/StartPopUp';
import LeaderBoard from './components/LeaderBoard';
import MainMenu from './components/MainMenu';
import Board from './components/Board';
import newGame from './game_logic/board-creator';

const game = newGame(8, 8, 8);

export default function App() {
	return (
		<View style={styles.container}>
			<StartPopUp />
			<MainMenu />
			{/* <LeaderBoard /> Keeping this comment out until scores is defined*/}
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
