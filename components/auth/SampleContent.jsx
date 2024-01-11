import React, { useState } from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { auth } from './Firebase'
import { signOut } from 'firebase/auth';

export default function SampleContent() {
  
  const [signOutSuccess, setSignOutSuccess] = useState(null);

  function doSignOut() {
    signOut(auth)
      .then(function() {
        setSignOutSuccess("You have signed out!");
      }).catch(function(error) {
        setSignOutSuccess(`There was an error signing out: ${error.message}!`);
      })
  }
  
  return (
    <View>
      <Text>You are signed in as {auth.currentUser.email}</Text>
      <Pressable style={styles.button} onPress={doSignOut}>
          <Text>Sign Out</Text>
      </Pressable>
      <Text>{signOutSuccess}</Text>
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
})