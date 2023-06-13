import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { PaperProvider, DefaultTheme } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native'
import GroceryList from './src/screens/GroceryList';
import Cart from './src/screens/Cart';
import { store } from './src/redux'
import { Provider } from 'react-redux'

const Stack = createNativeStackNavigator()

const theme = DefaultTheme

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name='grocery_list'
              component={GroceryList}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='cart'
              component={Cart}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </PaperProvider>
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
