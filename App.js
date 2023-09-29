import React from 'react';
import { View, StyleSheet } from 'react-native';
import Screen from './src';

export default function App() {
  return (
    <View style={styles.container}>
      <Screen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      width: "100%",
      height: "100%",
      backgroundColor: "#a3aac2"
  }
})