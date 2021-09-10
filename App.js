import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={{padding: 30}}>
      <View style={{flexDirection: 'row',justifyContent:'space-between'}}>
        <TextInput placeholder="Name" style={{borderBottomColor: 'black', borderBottomWidth:1, padding:10}}/>
        <Button title="ADD" />
        <View>

        </View>
      </View>
      <Text>Finally You did it. Really Nice and happy to see this</Text>
      <StatusBar style="auto" />
    </View>
  );
}
/*
const styles = StyleSheet.create({
  container: {
    flex: 14,
    color: '#ff0000',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/
