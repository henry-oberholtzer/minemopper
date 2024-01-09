import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StartPopUp from './assets/components/StartPopUp';
import LeaderBoard from './assets/components/LeaderBoard';
import MainMenu from './assets/components/MainMenu';

export default function App() {
  return (
    <View style={styles.container}>
			<StartPopUp />
			<MainMenu />
			<LeaderBoard /> 
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
