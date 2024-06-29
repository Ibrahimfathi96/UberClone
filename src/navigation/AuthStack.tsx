import {View} from 'react-native';
import React from 'react';
import {AuthStackParamList} from './navigation_types';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator<AuthStackParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="LoginScreen" component={View} />
      <Stack.Screen name="RegisterScreen" component={View} />
    </Stack.Navigator>
  );
};

export default AuthStack;
