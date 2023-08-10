import { View, Text } from 'react-native'
import React from 'react'
import AppNavigator from './src/nav/AppNavigator'
import { NavigationContainer } from '@react-navigation/native'
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import { Colors } from './src/utils/colors';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.Primary,
    secondary: Colors.Secondary,
  },
};

const App = () => {
  return (
    <GestureHandlerRootView style={{flex:1}}>
    <NavigationContainer>
      <PaperProvider theme={theme}>
      <AppNavigator/>
      </PaperProvider>
    </NavigationContainer>
    </GestureHandlerRootView>
  )
}

export default App