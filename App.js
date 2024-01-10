import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StartPopUp from './components/StartPopUp';
import LeaderBoard from './components/LeaderBoard';
import MainMenu from './components/MainMenu';
import Board from './components/Board';
import newGame from './game_logic/board-creator';
import { NavigationContainer } from '@react-navigation/native';

const game = newGame(8, 8, 8);

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <MainMenu />
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C0C0C0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
