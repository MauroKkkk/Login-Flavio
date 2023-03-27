import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './components/Routes';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Page from './components/Page';


export default function App() {

  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
