import { ReactElement, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { PaperProvider, DefaultTheme } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native'
import GroceryList from './src/screens/GroceryList';
import PriceCheck from './src/screens/PriceCheck';
import PriceCheckDetails from './src/screens/PriceCheckDetails';
import Cart from './src/screens/Cart';
import { store } from './src/redux'
import { Provider, useDispatch } from 'react-redux'
import { serverRequest } from './src/lib/utils';
import { setLocations } from './src/redux/generalSlice';
import SelectLocation from './src/screens/SelectLocation';

const Stack = createNativeStackNavigator()

const theme = DefaultTheme

function MainComponent() {
  const dispatch = useDispatch()

  useEffect(() => {
    setupInitialState()
  })

  const setupInitialState = async () => {
    const initialParams = await serverRequest('GET', '/initial_params')
    dispatch(setLocations(initialParams.locations))
  }
  return (
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
        <Stack.Screen
          name='price_check'
          component={PriceCheck}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='price_check_details'
          component={PriceCheckDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='select_location'
          component={SelectLocation}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

function WithProviders({ children }: { children: ReactElement }) {

  return (
    <PaperProvider theme={theme}>
      <Provider store={store}>
        {children}
      </Provider>
    </PaperProvider>
  );
}

export default function App() {
  return (
    <WithProviders>
      <MainComponent />
    </WithProviders>
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
