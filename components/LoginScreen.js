import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import { auth } from './auth/Firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInAnonymously } from "firebase/auth";

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.replace('Main')
      }
    });
    return unsubscribe;
  }, [])

  const handleSignUp = () => {
    setLoading(true);
    setErrorMessage('');
    createUserWithEmailAndPassword(auth, email, password)
      .catch(error => {
        setLoading(false);
        setErrorMessage(error.message.split("Firebase: "))
      })
  }

  const handleLogin = () => {
    setLoading(true);
    setErrorMessage('');
    signInWithEmailAndPassword(auth, email, password)
      .catch(error => {
        setLoading(false);
        setErrorMessage(error.message.split("Firebase: "))
      })
  }

  const handleGuest = () => {
    setLoading(true);
    setErrorMessage('');
    signInAnonymously(auth)
      .catch(error => {
        setLoading(false);
        setErrorMessage(error.message.split("Firebase: "))
      })
  }

  let authLoadStatus;
  if (loading) {
    authLoadStatus = "Authenticating, please wait...";
  }

  return (
    
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
      <View>
      <Text style={styles.title}>Sign In</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleLogin}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSignUp}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
        <Text style={styles.errorMessageText}>{errorMessage}</Text>
        <Text style={styles.statusMessageText}>{authLoadStatus}</Text>
        <Text>{"\n"}</Text>
        <View
          style={{
            borderBottomColor: 'white',
            borderBottomWidth: StyleSheet.hairlineWidth,
            alignSelf: 'stretch'
          }} />
        <Text style={{ color: 'white' }}>or</Text>
        <TouchableOpacity
          onPress={handleGuest}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Play Without Account</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 75,
    color: 'white',
  },
  container: {
    flex: 1,
    backgroundColor: '#C0C0C0',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C0C0C0',
  },
  inputContainer: {
    width: '80%'
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    borderColor: 'grey',
    borderWidth: 2,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#9AE19D',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    borderColor: 'grey',
    borderWidth: 2,
  },
  buttonOutline: {
    backgroundColor: '#9AE19D',
    marginTop: 5,
    borderColor: '#9AE19D',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText: {
    color: '#9AE19D',
    fontWeight: '700',
    fontSize: 16,
  },
  statusMessageText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  errorMessageText: {
    color: '#BA2D0B',
    fontWeight: '700',
    fontSize: 16,
  },
});