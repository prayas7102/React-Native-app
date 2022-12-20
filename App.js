import React from 'react';
import {StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

// npm i --dev eslint babel-eslint eslint eslint-plugin-react eslint-plugin-react-native

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
