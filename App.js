import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'
import { enableScreens } from 'react-native-screens'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import MealsNavigator from './navigation/MealsNavigator'
import mealsReducer from './Store/Reducers/meals'

enableScreens() //improves permformance when navigating screens

const rootReducer = combineReducers({
  meals: mealsReducer
})


const store = createStore(rootReducer)

const loadFonts = () => {
  return (
    Font.loadAsync({
      'fontBold': require('./assets/fonts/OpenSans-Bold.ttf'),
      'fontRegular': require('./assets/fonts/OpenSans-Regular.ttf')
    })
  )
}

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false)

  if (!fontsLoaded) {
    return <AppLoading startAsync={loadFonts} onFinish={() => setFontsLoaded(true)} onError={(err) => console.log(err)} />
  }

  return (
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
