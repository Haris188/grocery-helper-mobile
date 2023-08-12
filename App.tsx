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
import { setLocations, setUser, setupInitialState } from './src/redux/generalSlice';
import SelectLocation from './src/screens/SelectLocation';
import Profile from './src/screens/Profile';
import MyLocation from './src/screens/MyLocation';
import FavouriteStores from './src/screens/FavouriteStores';

export type RootStackParams = {
  grocery_list: undefined,
  cart: undefined,
  price_check: {
    locationId: number
  },
  price_check_details: {
    storeId: number
  },
  select_location: undefined,
  profile: undefined,
  my_location: undefined,
  favourite_stores: undefined
}

const Stack = createNativeStackNavigator<RootStackParams>() 
const theme = DefaultTheme

function MainComponent() {
  const dispatch = useDispatch()

  useEffect(() => {
    setupInitialState(dispatch)
  })


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
        <Stack.Screen
          name='profile'
          component={Profile}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name='my_location'
          component={MyLocation}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name='favourite_stores'
          component={FavouriteStores}
          options={{ headerShown: true }}
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
