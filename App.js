import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StartPopUp from './components/StartPopUp';
import LeaderBoard from './components/LeaderBoard';
import MainMenu from './components/MainMenu';
import Board from './components/Board';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={MainMenu} options={{
          title: 'MineMopper',
          headerStyle: {
            backgroundColor: '#E39600',
          }
        }} />
        <Stack.Screen name="Board" component={Board} />
        {/* <StatusBar style="auto" /> */}
      </Stack.Navigator>
    </NavigationContainer >
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#C0C0C0',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
