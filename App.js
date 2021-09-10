import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Shabash Ishan, Finally You did it. Really Nice and happy to see this</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 14,
    padding:  2,
    color: '#ff0000',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
