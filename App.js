import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { store } from './store';
import HomeScreen from './screens/HomeScreen';

export default function App() {

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <HomeScreen />
          <Text style={styles.txt}>UBER</Text>
        </View>
      </SafeAreaProvider>
    </Provider>

  );
}

// http://localhost:19000/debugger-ui/
// npm i --dev eslint babel-eslint eslint eslint-plugin-react eslint-plugin-react-native

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    // backgroundColor: "#fff",
    flex: 1,
    justifyContent: 'center',
  },
  txt: {
    fontSize: 50,
  }
});
