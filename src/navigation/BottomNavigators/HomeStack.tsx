import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeStackParamList} from '../navigation_types';
import HomeScreen from '../../screens/Home';
import RequestRideScreen from '../../screens/RequestRide';

const Stack = createStackNavigator<HomeStackParamList>();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={'HomeScreen'} component={HomeScreen} />
      <Stack.Screen name={'RequestRide'} component={RequestRideScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
