import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { Practica1 } from './src';

export default function App() {
  return (
    <View style={styles.container}>
      <Practica1 />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f2f3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
