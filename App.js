import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

let color = 'rgba(255, 125, 125, 0.5)';
export default function App() {
  let x = 0;
  let arr = [...Array(20)].map(() => { return Math.floor(Math.random() * 30) });
  console.log(arr[0]);

  function handleClick(e){ console.log(e.target.value) }

  return (
    <View style={styles.container}>
      <Text>{x}</Text>


      <View>{arr.map((k, i) => {
        return (
        <TouchableOpacity key={i}>
          <Text onPress={handleClick}>{k}</Text>
        </TouchableOpacity>
        )
      })}
      </View>

      <StatusBar style="auto" />
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
});
