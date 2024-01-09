import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet, Pressable, Button } from 'react-native';
import { auth } from './Firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';


export default function LoginForm() {

  const [accountCreds, setAccountCreds] = useState({
    email: '',
    password: '',
    error: ''
  })

  async function doSignUp() {
    if (accountCreds.email === '' || accountCreds.password === '') {
      setAccountCreds({
        ...accountCreds,
        error: 'Must input both a valid email address and password'
      });
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, accountCreds.email, accountCreds.password);
      console.log("Sign-up success!");
    } catch (error) {
      setAccountCreds({
        ...accountCreds,
        error: error.message
      });
    }
  }

  async function doSignIn() {
    if (accountCreds.email === '' || accountCreds.password === '') {
      setAccountCreds({
        ...accountCreds,
        error: 'Must input both a valid email address and password'
      });
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, accountCreds.email, accountCreds.password);
      console.log("Sign-in success!");
    } catch (error) {
      setAccountCreds({
        ...accountCreds,
        error: error.message
      });
    }
  }

  return(
    <View>

      <Text>I AM THE SIGN IN FORM!!!</Text>

      <View style={styles.buttonHolder}>
        <Pressable style={styles.button} onPress={doSignIn}>
          <Text>Login</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={doSignUp}>
          <Text>Create Account</Text>
        </Pressable>
      </View>

      <Text>{accountCreds.error}</Text>
      <Text>{auth.user}</Text>
      

			<View style={styles.inputHolder}>
      <TextInput
				textContentType="emailAddress"
				placeholder="Email"
				placeholderTextColor={'gray'}
				onChangeText={(inputtedEmail) => setAccountCreds({...accountCreds, email: inputtedEmail})}
				autoComplete="email"
			/>
			<TextInput
				secureTextEntry
				placeholder="Password"
				placeholderTextColor={'gray'}
				onChangeText={(inputtedPassword) => setAccountCreds({...accountCreds, password: inputtedPassword})}
				autoComplete="password"
			/>
		</View>
  </View>
  )
};

const styles= StyleSheet.create({
  button: {
    backgroundColor: '#9AE19D',
    padding: '10px',
    margin: '10px',
    borderRadius: '10px',
    textAlign: 'center'
  },
  buttonHolder: {
    // flex: 2
    justifyContent: 'center'
  },
  inputHolder: {
    backgroundColor: '#D9D9D9',
    padding: '10px',
    margin: '10px',
  }
})