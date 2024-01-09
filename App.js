import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginForm from './auth/LoginForm';
import { NavigationContainer } from 'react-navigation/native'
import { createNativeStackNavigator } from 'react-navigation/native-stack'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator>
      {/* <Stack.Screen name='LogIn' component={LoginForm}/> */}
      </StackNavigator>
    </NavigationContainer>
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
