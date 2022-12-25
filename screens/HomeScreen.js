import React from 'react';
import { StyleSheet, SafeAreaView, View, Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import NavOptions from './NavOptions';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View style={tw`p-5`}>
        <Image
          style={styles.img1}
          source={{ uri: "https://links.papereact.com/gzs" }}
        />
        <NavOptions />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  img1: {
    height: 100,
    resizeMode: "contain",
    width: 100,
  }
});

export default HomeScreen;