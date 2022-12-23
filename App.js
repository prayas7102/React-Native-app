import React, { useState } from 'react';
import { Button, Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';

export default function App() {
  
  const [notification, setNotification] = useState("Player X will start");
  const [board, setBoard] = useState(
      [" "," "," ",
      " "," "," ",
      " "," "," ",]
    );

  return (
    <View style={styles.container}>
      <StatusBar style="auto"/>
      <Text style={styles.txt}>TicTacToe</Text>
    </View>
  );
}

// http://localhost:19000/debugger-ui/
// npm i --dev eslint babel-eslint eslint eslint-plugin-react eslint-plugin-react-native

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: color,
    flex: 1,
    justifyContent: 'center',
  },
  txt:{
    fontSize: 50,
  }
});
