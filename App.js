import { StyleSheet, Text } from 'react-native';
import React, { useState } from 'react';
import MyStack from './components/Routes';

import { NavigationContainer } from '@react-navigation/native';

export default function App() {



    return (

      <NavigationContainer >
        <MyStack/>
      </NavigationContainer>

    )
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
