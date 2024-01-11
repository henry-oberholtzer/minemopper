import MainMenu from './components/MainMenu';
import Board from './components/Board';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './components/LoginScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LogIn">
        <Stack.Screen name="LogIn" component={LoginScreen} options={{
          title: 'MineMopper',
          headerShown: false,
          headerTitleAlign: 'center',
        }} />
        <Stack.Screen name="Main" component={MainMenu} options={{
          title: 'MineMopper',
          headerStyle: {
            backgroundColor: '#E39600',
          },
          headerTitleAlign: 'center',
        }} />
        <Stack.Screen name="Board" component={Board} options={{
          title: 'MineMopper',
          headerStyle: {
            backgroundColor: '#E39600',
          },
          headerTitleAlign: 'center',
        }} />
      </Stack.Navigator>
    </NavigationContainer >
  );
}

