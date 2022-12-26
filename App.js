import React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { store } from './store';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import 'react-native-gesture-handler';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MapScreen"
              component={MapScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>

  );
}

// http://localhost:19000/debugger-ui/
// npm i --dev eslint babel-eslint eslint eslint-plugin-react eslint-plugin-react-native

// const styles = StyleSheet.create({
//   container: {
//     alignItems: 'center',
//     // backgroundColor: "#fff",
//     flex: 1,
//     justifyContent: 'center',
//   },
//   txt: {
//     fontSize: 50,
//   }
// });
