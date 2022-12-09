/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import Cart from './screens/cart';
import React from 'react';
import {Node} from 'react';
import {Text, useColorScheme, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Profile from './screens/profile';
import CheckOut from './screens/checkOut';

import {useSelector, useDispatch} from 'react-redux';
import {decrement, increment, selectCount} from './app/slices/counterSlice';
const Stack = createNativeStackNavigator();

const App: () => Node = () => {
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter.value);
  const Tab = createBottomTabNavigator();
  const name = useSelector(state => state.name.value);
  return (
    <View style={{width: '100%', height: '100%'}}>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Home">
          <Tab.Screen name="Home" component={Cart} options={{title: `Home`}} />
          <Tab.Screen name="Cart" component={CheckOut} />
          <Tab.Screen name="History" component={Profile} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default App;
