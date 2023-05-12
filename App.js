import { StyleSheet, Text } from 'react-native';
import React, { useState } from 'react';
import MyStack from './components/Routes';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers';
import Home from './components/Home';
import { getAuth } from 'firebase/auth';

const store = createStore(rootReducer, applyMiddleware(thunk))

const Stack = createStackNavigator();

export default function App() {
 const [ loggedIn, setLoggedIn ] = useState(false)
 const [ loaded, setLoaded ] = useState(false)
 const auth = getAuth()
  function componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (!user) {

          setLoggedIn(false)
          setLoaded(true);
        
      } else {

          setLoggedIn(true)
          setLoaded(true)

      }
    })
  }
    componentDidMount()
    if (!loaded) {
      return (
        <Text>Carregando</Text>
      )
    }

    if (!loggedIn) {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    }

    return (
      <Provider store={store}>
        <NavigationContainer >
          <MyStack/>
        </NavigationContainer>
      </Provider>
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
